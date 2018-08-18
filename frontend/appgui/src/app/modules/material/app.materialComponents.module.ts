import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule,
  MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatPaginatorModule, MatSelectionList, MatSelectModule,
  MatSidenavModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {LayoutModule} from "@angular/cdk/layout";
import {RemoveDialogComponent} from "../../components/commons/remove-dialog/remove-dialog.component";
import {Observable} from "rxjs/index";

@NgModule({
  exports: [
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatChipsModule,
    MatCardModule,
    MatMenuModule
  ],
  entryComponents: [
    RemoveDialogComponent
  ]
})
export class MaterialComponentsModule {
}
