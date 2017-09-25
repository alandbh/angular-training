import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.training';
  cursoAngular: boolean = true;
  curtiu: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/sports/';
  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Curso de Angular';

  nome:string = 'abc';

  pessoa: any = {
    nome: "Alan",
    idade: "42"
  }
  
  getValor() {
    return 1;
  }

  botaoClicado() {
    alert('opaaa');
  }

  // isso é um shorthand para a próxima função
  // onKeyUp(evento) {
  //   console.log(evento);
  // }

  onKeyUp(evento: KeyboardEvent) { // evento tipado
    //console.log(evento);
    //console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
