import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ContadorComponent } from './components/contador/contador.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { ExercicioNgclassComponent } from './components/exercicio-ngclass/exercicio-ngclass.component';
import { ExercicioPipeComponent } from './components/exercicio-pipe/exercicio-pipe.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PipeComponent } from './components/pipe/pipe.component';

// import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContadorComponent,
    DiretivasComponent,
    ExercicioNgclassComponent,
    PipeComponent,
    ExercicioPipeComponent,
  ],
  imports: [
    CommonModule,
    // AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContadorComponent,
    DiretivasComponent,
    ExercicioNgclassComponent,
    PipeComponent,
    ExercicioPipeComponent,
  ],
})
export class SharedModule { }
