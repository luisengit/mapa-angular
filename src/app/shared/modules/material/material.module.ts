import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatToolbarModule, MatButtonModule,  MatSnackBarModule, MatDialogModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ],
  declarations: []
})
export class MaterialModule { }
