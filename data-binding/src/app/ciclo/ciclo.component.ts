import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  constructor() { 
    this.log('constructor');
  }

  ngOnInit() {
    this.log('ngOnit');
  }
  
  ngDoCheck() {
    this.log('ngDoCheck');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
