import {Component, OnInit} from '@angular/core';
import {TargetEnum} from '@app/common/enums/target.enum';

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
    target: TargetEnum;
  }[] = [];

  ngOnInit(): void {

    this.initCards();

  }

  private initCards(): void {
    this.resetCards();

    this.cards.push(...[
      {
        title: 'main.cards.0.title',
        subtitle: 'main.cards.0.subtitle',
        content: 'main.cards.0.content',
        target: TargetEnum.NEED_HELP,
      },
      {
        title: 'main.cards.1.title',
        subtitle: 'main.cards.1.subtitle',
        content: 'main.cards.1.content',
        target: TargetEnum.TO_HELP,
      }
    ]);
  }

  private resetCards(): void {

    this.cards.length = 0;

  }
}
