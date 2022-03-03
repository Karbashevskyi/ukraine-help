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

  public readonly translateCardListPath: string = `pages.home.cards`;

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
        title: `${this.translateCardListPath}.${TargetEnum.TO_HELP}.title`,
        subtitle: `${this.translateCardListPath}.${TargetEnum.TO_HELP}.subtitle`,
        content: `${this.translateCardListPath}.${TargetEnum.TO_HELP}.content`,
        target: TargetEnum.TO_HELP,
        color: IonColor.PRIMARY,
        icon: 'megaphone-outline'
      },
      {
        title: `${this.translateCardListPath}.${TargetEnum.NEED_HELP}.title`,
        subtitle: `${this.translateCardListPath}.${TargetEnum.NEED_HELP}.subtitle`,
        content: `${this.translateCardListPath}.${TargetEnum.NEED_HELP}.content`,
        target: TargetEnum.NEED_HELP,
        color: IonColor.WARNING,
        icon: 'accessibility-outline'
      },
    ]);
  }

  private resetCards(): void {

    this.cards.length = 0;

  }
}
