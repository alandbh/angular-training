import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	CursosComponent,
  	CursoDetalheComponent
  ],
  exports: [
  	CursosComponent
  ], 
  providers: [ // providers é obrigatório para instanciar um serviço
    CursosService
  ] 

})
export class CursosModule { }
