import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  @Input() nome: string;
  // o decorator @Input foi usado para criar a propriedade "nome"
  // Dá pra declarar um nome diferente para a propriedade
  // @Input(nomeDaPropriedade) nomeInternoDaVariavel: string = '';



  constructor() { }

  ngOnInit() {
  }

}
