import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { ApiProvider } from '../providers/api/api';
import { ClientesProvider } from '../providers/clientes/clientes';
import { LoginProvider } from '../providers/login/login';
import { ArtigosProvider } from '../providers/artigos/artigos';
import { LoginPage } from '../pages/login/login';
import { HttpModule } from '@angular/http'
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { Controllers } from '../controllers/controllers';
import { DocumentoVendaProvider } from '../providers/documento-venda/documento-venda';
import { DocumentoValidator } from '../validators/documento';
import { ArtigosValidator } from '../validators/artigos';
import { ClientesValidator } from '../validators/clientes';
import { MessagesValidator } from '../validators/messages';
import { MenuProvider } from '../providers/menu/menu';
import { BaseServicesProvider } from '../providers/base-services/base-services';

@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    ClientesProvider,
    LoginProvider,
    ArtigosProvider,
    AuthServiceProvider,
    Controllers,
    DocumentoVendaProvider,
    DocumentoValidator,
    ArtigosValidator,
    ClientesValidator,
    MessagesValidator,
    MenuProvider,
    BaseServicesProvider
  ]
})
export class AppModule {}
