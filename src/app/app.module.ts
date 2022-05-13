import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NovoMomentoComponent } from './components/pages/novo-momento/novo-momento.component';
import { MomentoFormComponent } from './components/momento-form/momento-form.component';
import { MensagensComponent } from './components/mensagens/mensagens.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MomentoComponent } from './components/pages/momento/momento.component';
import { EditMomentoComponent } from './components/pages/edit-momento/edit-momento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SobreComponent,
    HomeComponent,
    NovoMomentoComponent,
    MomentoFormComponent,
    MensagensComponent,
    MomentoComponent,
    EditMomentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
