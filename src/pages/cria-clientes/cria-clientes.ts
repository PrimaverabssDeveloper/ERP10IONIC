import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';
import { ICriaClientes } from '../../interfaces/interfaces';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ClientesValidator } from '../../validators/clientes';
import { BaseServicesProvider } from '../../providers/base-services/base-services';
import { MessagesValidator } from '../../validators/messages';
import { Controllers } from '../../controllers/controllers';


@IonicPage()
@Component({
  selector: 'page-cria-clientes',
  templateUrl: 'cria-clientes.html',
})
export class CriaClientesPage {
  clientesObj = {} as ICriaClientes;
  criaClienteForm: FormGroup;
  moedas: any[];
  paises: any[];
  validationMessages = this.messagesValidator.criarCliente();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private clientesProvider: ClientesProvider,
              private formBuilder: FormBuilder,
              public clientesValidator: ClientesValidator,
              private baseProvider: BaseServicesProvider,
              public messagesValidator: MessagesValidator,
              private controllers: Controllers) {

    this.criaClienteForm = this.formBuilder.group({
      cliente: new FormControl('', Validators.compose([Validators.required]), clientesValidator.checkClienteExiste.bind(clientesValidator)),
      nome: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      descricao: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      morada: new FormControl('', Validators.compose([Validators.required])),
      localidade: new FormControl('', Validators.compose([Validators.required])),
      codPostal: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+$')])),
      locCodPostal: new FormControl('', Validators.compose([Validators.required])),
      telefone: new FormControl('', Validators.compose([Validators.required, Validators.minLength(9)])),
      numContribuinte: new FormControl('', Validators.compose([Validators.required, Validators.minLength(9)])),
      pais: new FormControl('', Validators.compose([Validators.required])),
      moeda: new FormControl('', Validators.compose([Validators.required])),
    })
  }

  ionViewDidLoad() {
    this.listaMoedas()
    this.listaPaises()
  }

  listaMoedas() {
    this.baseProvider.listaMoedas().subscribe((data) => {
      this.moedas = data.DataSet.Table
    })
  }

  listaPaises() {
    this.baseProvider.listaPaises().subscribe((data) => {
      this.paises = data.DataSet.Table
    })
  }

  criarCliente() {
    let msg = "A criar cliente.."
    let loader = this.controllers.loader(msg)
    loader.present().then(() => {
      this.clientesProvider.criarCliente(this.clientesObj)
    });
    loader.onDidDismiss(() => {
      let msg = "Cliente " + this.clientesObj.Cliente + " criado com sucesso"
      this.controllers.toastController(msg)
      this.navCtrl.setRoot('ClientesPage')
    })
  }

}
