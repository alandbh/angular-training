import { Injectable } from '@angular/core';

@Injectable() // significa que essa classe pode ser injetada em outra classe
// todo serviço vai ter um decorator "@injectable"
export class CursosService {

  constructor() {  }
  	
  	getCursos() {
  		return ['Java', 'Angular', 'PHP', 'Capoeira', 'Papagaio'];
  	}

}
