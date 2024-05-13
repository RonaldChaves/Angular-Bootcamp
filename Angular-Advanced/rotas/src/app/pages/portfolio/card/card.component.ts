import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(private activeRoute: ActivatedRoute){
    this.activeRoute.params.subscribe(res => console.log(res))
    this.activeRoute.queryParams.subscribe(res => console.log(res))
  }


}
