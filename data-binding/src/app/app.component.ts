import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  destruir: boolean = false;

    destroi() {
    this.destruir = !this.destruir;
    console.log(this.destruir);
  }

 
}
