import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtigosProvider } from '../../providers/artigos/artigos';
import { ICriaArtigos } from '../../interfaces/interfaces';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ArtigosValidator } from '../../validators/artigos';
import { MessagesValidator } from '../../validators/messages';
import { Controllers } from '../../controllers/controllers';


@IonicPage()
@Component({
  selector: 'page-cria-artigos',
  templateUrl: 'cria-artigos.html',
})
export class CriaArtigosPage {
  artigosObj = {} as ICriaArtigos;
  criaArtigosForm: FormGroup
  validationMessages = this.messagesValidator.criarArtigo();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private artigosProvider: ArtigosProvider,
              private formBuilder: FormBuilder,
              public artigosValidator: ArtigosValidator,
              private messagesValidator: MessagesValidator,
              private controllers: Controllers) {

    this.criaArtigosForm = this.formBuilder.group({
      artigo: new FormControl('', Validators.compose([Validators.required]), artigosValidator.checkArtigoExiste.bind(artigosValidator)),
      descricao: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      codBarras: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])),
      unidadeBase: new FormControl('', Validators.compose([Validators.required])),
      observacoes: new FormControl('', Validators.compose([Validators.required])),
      iva: new FormControl('', Validators.compose([Validators.required]), artigosValidator.ivaValidator.bind(artigosValidator)),
      peso: new FormControl('', Validators.compose([Validators.required])),
      volume: new FormControl('', Validators.compose([Validators.required]))
    })
  }

  criarArtigo() {
    let msg = "A criar artigo.."
    let loader = this.controllers.loader(msg)
    loader.present().then(() => {
      this.artigosProvider.criarArtigo(this.artigosObj)
    });
    loader.onDidDismiss(() => {
      let msg = "Artigo " + this.artigosObj.Artigo + " criado com sucesso"
      this.controllers.toastController(msg)
      this.navCtrl.setRoot('ArtigosPage')
    })
  }
}
