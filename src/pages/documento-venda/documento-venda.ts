import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentoVendaProvider } from '../../providers/documento-venda/documento-venda';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DocumentoValidator } from '../../validators/documento';
import { IDocumentoVenda, IDocumentoVendaFields, ILinha } from '../../interfaces/interfaces';
import { ClientesValidator } from '../../validators/clientes';
import { ArtigosValidator } from '../../validators/artigos';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { MessagesValidator } from '../../validators/messages';
import { Controllers } from '../../controllers/controllers';


@IonicPage()
@Component({
  selector: 'page-documento-venda',
  templateUrl: 'documento-venda.html',
})
export class DocumentoVendaPage {
  docForm: FormGroup
  documentoObj = {} as IDocumentoVenda;
  docFields = {} as IDocumentoVendaFields;
  series: any[];
  linhas: any[];
  validationMessages = this.messagesValidator.documentoVendas();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public docValidator: DocumentoValidator,
              private formBuilder: FormBuilder,
              private docProvider: DocumentoVendaProvider,
              private clienteValidator: ClientesValidator,
              private artigosValidator: ArtigosValidator,
              private authProvider: AuthServiceProvider,
              private messagesValidator: MessagesValidator,
              private controllers: Controllers) {

    this.docForm = this.formBuilder.group({
      documento: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]), docValidator.checkDocumento.bind(docValidator)),
      serie: new FormControl('', Validators.compose([Validators.required])),
      dataDoc: new FormControl(''),
      dataVenc: new FormControl(''),
      cliente: new FormControl('', Validators.compose([Validators.required]), docValidator.checkCliente.bind(docValidator)),
      artigo: new FormControl('', Validators.compose([Validators.required]), docValidator.checkArtigo.bind(docValidator)),
      quantidade: new FormControl('', Validators.compose([Validators.required]), docValidator.quantidadeValidator.bind(docValidator)),
    })
    this.documentoObj.Linhas = new Array<ILinha>();
  }

  ionViewCanEnter(): boolean | Promise<any> {
    return this.authProvider.isAuthenticated(this.navCtrl);
  }

  getSerie() {
    this.docProvider.getSeries(this.documentoObj.Tipodoc).subscribe(data => {
      this.series = data
    })
  }

  daValorDocumento() {
    let atributo = "Descricao"
    this.docProvider.daValorDocumento(this.documentoObj.Tipodoc, atributo).subscribe(data => {
      this.docFields.DescricaoDoc = data
    })
  }

  daValorCliente() {
    let atributos = [
      "Nome",
      "NumContribuinte"
    ]
    this.clienteValidator.daValorCliente(this.documentoObj.Entidade, atributos).then((data) => {
      this.docFields.NomeCliente = data[0].Valor;
      this.docFields.NumContribuinte = data[1].Valor
    })
  }

  daValorArtigo() {
    let atributos = [
      "Descricao",
      "ArmazemSugestao"
    ]
    this.artigosValidator.daValorArtigo(this.docFields.Artigo, atributos).then((data) => {
      this.docFields.DescricaoArtigo = data[0].Valor;
      this.docFields.ArmazemArtigo = data[1].Valor;
    })
  }

  addArtigo() {
    this.documentoObj.Linhas.push({
      Artigo: this.docFields.Artigo,
      Quantidade: this.docFields.Quantidade
    })
    this.linhas = this.documentoObj.Linhas;
  }

  removeArtigo(artigo) {
    this.documentoObj.Linhas.forEach((item, index) => {
      if (item === artigo) this.documentoObj.Linhas.splice(index, 1)
    })
  }

  createDocument() {
    this.documentoObj.TipoEntidade = "C";
    let msg = "A criar documento.."
    let loader = this.controllers.loader(msg)
    loader.present().then(() => {
      this.docProvider.createDocument(this.documentoObj);
    });
    console.log(this.documentoObj)
  }
}
