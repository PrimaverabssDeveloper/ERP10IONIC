import { Injectable } from '@angular/core';


@Injectable()
export class MenuProvider {

  sideMenuPages() { 
    let pages = 
    [
      {
        title: 'Documento Venda', component: 'DocumentoVendaPage', Icon: 'document'
      },
      {
        title: 'Documento Interno', component: 'DocumentoInternoPage', Icon: 'document'
      },
      { 
        title: 'Artigos', Icon: 'create',
        subPages: [ 
          {
            title: 'Cria Artigos', component: 'CriaArtigosPage'//, Icon: 'create'
          },
          {
            title: 'Lista Artigos', component: 'ArtigosPage'//, Icon: 'md-list'
          }
        ]
      },
      {
        title: 'Clientes', Icon: 'contacts',
        subPages: [
          {
            title: 'Cria Clientes', component: 'CriaClientesPage' //, Icon: 'contact'
          },
          {
            title: 'Lista Clientes', component: 'ClientesPage'//, Icon: 'md-list'
          }
        ]
      }
    ]
    return pages;
  }

}
