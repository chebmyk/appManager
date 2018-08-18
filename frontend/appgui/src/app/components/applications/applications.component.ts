import {Component, OnInit, ViewChild} from '@angular/core';
import {Application} from "../../classes/application";
import {ApplicationService} from "../../services/application/application.service";
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {forkJoin} from "rxjs/index";
import {RemoveDialogComponent} from "../commons/remove-dialog/remove-dialog.component";
import {AuthenticateService} from "../../services/auth/authenticate.service";

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  private applications: Application[];
  displayedColumns: string[] = ['select', 'id', 'name', 'type', 'contentType','user'];
  tableDataSource: MatTableDataSource<Application>;
  allowMultiSelect = true;
  selection = new SelectionModel<Application>(this.allowMultiSelect, []);
  canCreate: boolean;
  canDelete: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

    constructor(
      private applicationService: ApplicationService,
      private authService: AuthenticateService,
      private removeDialog: MatDialog
  ) {
      this.tableDataSource = new MatTableDataSource<Application>([]);
    }

    ngOnInit() {
      this.getApplications();
      this.tableDataSource.paginator = this.paginator;
      this.tableDataSource.sort = this.sort;

      this.canCreate = this.authService.hasAccess('CREATE', 'App');
      this.canDelete = this.authService.hasAccess('DELETE', 'App');
    }

    getApplications(): void {
      this.applicationService.getApps()
      .subscribe(app => {
        this.applications = app;
        this.tableDataSource.data = app;
        if (this.applications.length == 0) {
          this.applicationService.messageService.info("There is no applications")
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
      dialogConfig.ariaLabel = 'Delete ...'
      dialogConfig.data =  this.selection.selected;
      let dialogRef = this.removeDialog.open(RemoveDialogComponent ,dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.removeApps();
        }
      });
    }

    removeApps() {
      let calls = [];
      this.selection.selected.forEach(app => {
        calls.push(this.applicationService.delete(app.id));
      });
      forkJoin(calls).subscribe(() => {
        this.getApplications();
        this.selection.clear();
      });
    }
}
