import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditaArtigosPage } from './edita-artigos';

@NgModule({
  declarations: [
    EditaArtigosPage,
  ],
  imports: [
    IonicPageModule.forChild(EditaArtigosPage),
  ],
})
export class EditaArtigosPageModule {}
