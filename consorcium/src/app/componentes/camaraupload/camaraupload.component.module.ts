import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CamarauploadComponent } from './camaraupload.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [CamarauploadComponent],
  exports: [CamarauploadComponent]
})
export class CamarauploadComponentModule { }