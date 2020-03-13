import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriaClientesPage } from './cria-clientes';

@NgModule({
  declarations: [
    CriaClientesPage,
  ],
  imports: [
    IonicPageModule.forChild(CriaClientesPage),
  ],
})
export class CriaClientesPageModule {}
