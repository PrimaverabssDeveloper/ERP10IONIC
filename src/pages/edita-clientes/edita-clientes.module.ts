import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditaClientesPage } from './edita-clientes';

@NgModule({
  declarations: [
    EditaClientesPage,
  ],
  imports: [
    IonicPageModule.forChild(EditaClientesPage),
  ],
})
export class EditaClientesPageModule {}
