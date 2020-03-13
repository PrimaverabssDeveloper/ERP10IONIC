import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtigosPage } from './artigos';

@NgModule({
  declarations: [
    ArtigosPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtigosPage),
  ],
})
export class ArtigosPageModule {}
