import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../classes/user";
import {UserService} from "../../services/user/user.service";
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {RemoveDialogComponent} from "../commons/remove-dialog/remove-dialog.component";
import {forkJoin} from "rxjs/index";
import {AuthenticateService} from "../../services/auth/authenticate.service";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  displayedColumns: string[] = ['select', 'id', 'name', 'email', 'role'];
  tableDataSource: MatTableDataSource<User>;
  canCreate: boolean;
  canDelete: boolean;

  allowMultiSelect = true;
  selection = new SelectionModel<User>(this.allowMultiSelect, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UserService,
    private authService: AuthenticateService,
    private removeDialog: MatDialog
  ) {
    this.tableDataSource = new MatTableDataSource<User>([]);
  }

  ngOnInit() {
    this.getUsers();
    this.tableDataSource.paginator = this.paginator;
    this.tableDataSource.sort = this.sort;
    this.canCreate = this.authService.hasAccess('CREATE', 'User');
    this.canDelete = this.authService.hasAccess('DELETE', 'User');
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(usr => {
        this.users = usr;
        this.tableDataSource.data = usr;
        if (this.users.length === 0) {
          this.userService.messageService.info("There is no users")
        }
      });
  }

  applyFilter(filterValue: string) {
    this.tableDataSource.filter = filterValue.trim().toLowerCase();

    if (this.tableDataSource.paginator) {
      this.tableDataSource.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableDataSource.data.length;
    return numSelected == numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.tableDataSource.data.forEach(row => this.selection.select(row));
  }

  openRemoveDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.ariaLabel = 'Delete ...';
    dialogConfig.data =  this.selection.selected;
    let dialogRef = this.removeDialog.open(RemoveDialogComponent ,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.removeUsers();
      }
    });
  }

  removeUsers() {
    let calls = [];
    this.selection.selected.forEach(user => {
      calls.push(this.userService.delete(user.id));
    });
    forkJoin(calls).subscribe(() => {
      this.getUsers();
      this.selection.clear();
    },
      () => {});
  }
}


