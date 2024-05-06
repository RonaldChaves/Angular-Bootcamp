import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'diretivas-proj';
  IsAlive: boolean = false;
  textInBtn: string = 'Clique para aparecer';

  clickOn() {
    if (!this.IsAlive) {
      this.IsAlive = true;
      this.textInBtn = 'clique para sumir';

    } else {
      this.IsAlive = false;
      this.textInBtn = 'clique para aparecer';
    }
  }
}
