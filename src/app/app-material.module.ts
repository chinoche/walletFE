import { NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule, MatDialog, MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule
  ]
})

export class AppMaterialModule {

}
