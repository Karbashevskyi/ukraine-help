import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public readonly cards: {
    title: string;
    subtitle: string;
    content: string;
  }[] = [];

  constructor() {

  }

  ngOnInit() {

    this.initCards();

  }

  private initCards(): void {
    this.cards.length = 0;

    this.cards.push(...[
      {
        title: 'main.cards.0.title',
        subtitle: 'main.cards.0.subtitle',
        content: 'main.cards.0.content',
      },
      {
        title: 'main.cards.1.title',
        subtitle: 'main.cards.1.subtitle',
        content: 'main.cards.1.content',
      }
    ]);
  }
}
