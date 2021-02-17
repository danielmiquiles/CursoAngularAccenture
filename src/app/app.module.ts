import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { DiretivasComponent } from './diretivas/diretivas.component';

import { ExercicioNgclassComponent } from './exercicio-ngclass/exercicio-ngclass.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PipeComponent } from './pipe/pipe.component';
import { ExercicioPipeComponent } from './exercicio-pipe/exercicio-pipe.component';

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
    ExercicioPipeComponent
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
