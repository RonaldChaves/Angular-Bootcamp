import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  linkedIn: string = 'https://www.linkedin.com/in/ronald-chaves-oliveira/';
  gitHub: string = 'https://github.com/RonaldChaves';
  instagram: string = 'https://www.instagram.com/r.chvss/';
}
