import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriaArtigosPage } from './cria-artigos';

@NgModule({
  declarations: [
    CriaArtigosPage,
  ],
  imports: [
    IonicPageModule.forChild(CriaArtigosPage),
  ],
})
export class CriaArtigosPageModule {}
