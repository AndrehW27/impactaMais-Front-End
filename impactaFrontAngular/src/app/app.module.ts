import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderModule} from 'ngx-order-pipe'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SobreComponent } from './sobre/sobre.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { HospitalComponent } from './hospital/hospital.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { PutHospitalComponent } from './put-hospital/put-hospital.component';
import { DeleteHospitalComponent } from './delete-hospital/delete-hospital.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavbarSangueComponent } from './navbar-sangue/navbar-sangue.component';
import { FooterSangueComponent } from './footer-sangue/footer-sangue.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PutPerfilComponent } from './put-perfil/put-perfil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    FooterComponent,
    NavbarComponent,
    SobreComponent,
    CadastroComponent,
    LoginComponent,
    FeedComponent,
    DoacaoComponent,
    HospitalComponent,
    PutPostagemComponent,
    DeletePostagemComponent,
    PutHospitalComponent,
    DeleteHospitalComponent,
    AlertasComponent,
    NavbarSangueComponent,
    FooterSangueComponent,
    ParceirosComponent,
    PerfilComponent,
    PutPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule, 
    OrderModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
