import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }
