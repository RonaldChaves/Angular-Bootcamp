import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  photo: string = '';
  @Input()
  title: string = '';
  @Input()
  date: string = '';
  @Input()
  Id: string = '';
}
