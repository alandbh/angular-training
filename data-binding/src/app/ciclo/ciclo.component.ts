import { Component, OnInit, DoCheck, OnDestroy, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  valorInicial2 = 5;
  


  alteraValor() {
    this.valorInicial2++;
    //console.log(this.valorInicial2);
  }



  constructor() { 
    this.log('constructor');
  }

  ngOnInit() {
    this.log('ngOnit');
  }
  
  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
