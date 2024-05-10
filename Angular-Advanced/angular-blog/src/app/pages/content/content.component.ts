import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  contentTitle: string = '';
  contentDescription: string = '';
  contentDate: string = '';
  contentAuthor: string = '';
  contentPhoto: string = '';
  contentAlt: string = '';

  private id: string | null = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    var ID = this.id;
    this.route.paramMap.subscribe(value => ID = value.get("id"));

    this.setValuesToComponent(ID);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.contentDate = result.date;
    this.contentAuthor = result.author;
    this.contentPhoto = result.photo;
    this.contentAlt = result.alt;
  }
}
