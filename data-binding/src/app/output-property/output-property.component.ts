import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('meuCampo') meuCampoValor: ElementRef;


  incrementa() {
    // this.valor ++;
    //this.mudouValor.emit({novoValor: this.valor});
    console.log(this.meuCampoValor.nativeElement.value);
    this.meuCampoValor.nativeElement.value ++;
    //this.valor ++;
  }

  decrementa() {
    this.valor --;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
