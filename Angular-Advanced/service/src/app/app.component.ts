import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <main class="container">

  <h1>Services</h1>
  <app-card></app-card>
  <router-outlet></router-outlet>

  </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service';
}
