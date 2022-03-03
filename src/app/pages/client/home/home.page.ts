import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TargetEnum} from '@app/common/enums/target.enum';

export enum IonColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  LIGHT = 'light',
  MEDIUM = 'medium',
  DARK = 'dark',
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {

  public readonly cards: {
    title: string;
    subtitle: string;
    content: string;
    icon: string;
    target: TargetEnum;
    color: IonColor;
  }[] = [];

  ngOnInit(): void {

    this.initCards();

  }

  private initCards(): void {
    this.resetCards();

    this.cards.push(...[
      {
        title: 'pages.home.cards.0.title',
        subtitle: 'pages.home.cards.0.subtitle',
        content: 'pages.home.cards.0.content',
        target: TargetEnum.NEED_HELP,
        color: IonColor.WARNING,
        icon: 'sad-outline'
      },
      {
        title: 'pages.home.cards.1.title',
        subtitle: 'pages.home.cards.1.subtitle',
        content: 'pages.home.cards.1.content',
        target: TargetEnum.TO_HELP,
        color: IonColor.TERTIARY,
        icon: 'megaphone-outline'
      }
    ]);
  }

  private resetCards(): void {

    this.cards.length = 0;

  }
}
