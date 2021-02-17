import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './shared/components/contador/contador.component';
import { DiretivasComponent } from './shared/components/diretivas/diretivas.component';

import { ExercicioNgclassComponent } from './shared/components/exercicio-ngclass/exercicio-ngclass.component';

import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { PipeComponent } from './shared/components/pipe/pipe.component';
import { ExercicioPipeComponent } from './shared/components/exercicio-pipe/exercicio-pipe.component';
import { LoginComponent } from './login/login.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContadorComponent,
    DiretivasComponent,
    ExercicioNgclassComponent,
    PipeComponent,
    ExercicioPipeComponent,
    LoginComponent,
    ExtratoComponent,
    NaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
