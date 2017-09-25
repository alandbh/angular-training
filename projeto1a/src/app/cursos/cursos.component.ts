import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //para tipar suas variáveis
  nomePortal: string;

  //cursos: string[] = ['Java', 'Angular', 'PHP', 'Capoeira'];
  cursos: string[];

  // ----- INJEÇÃO DE DEPENDENCIA
  // constructor(meusCursosService: CursosService)
  // ao invés de declarar a variável dentro e fora do constrtor, ela pode ser passada como parametro
  // pode ainda ser parametrizada com os modificadores PUBLIC ou PRIVATE

  // tem que ir lá no cursos.module e cadastrar um novo metadado chamado PROVIDERS
  // para isso, o serviço deve ser importado e declarado após o EXPORT

  constructor(private meusCursosService: CursosService) { 
  	this.nomePortal = 'http://loiane.training';

    //var servico = new CursosService(); // instaciando classe no javascript

    this.cursos = this.meusCursosService.getCursos();

  }

  ngOnInit() {
  }

}
