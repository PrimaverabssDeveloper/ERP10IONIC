import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentoVendaPage } from './documento-venda';

@NgModule({
  declarations: [
    DocumentoVendaPage,
  ],
  imports: [
    IonicPageModule.forChild(DocumentoVendaPage),
  ],
})
export class DocumentoVendaPageModule {}
