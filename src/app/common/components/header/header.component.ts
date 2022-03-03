import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {languageNameList} from '@app/common/consts/app/language.const';

@Component({
  selector: 'app-header',
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button>
            <ion-icon slot="icon-only" name="person-circle"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button>
            <ion-label>{{ nameOfLanguage }}</ion-label>
            <ion-icon slot="end" name="language-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  `
})
export class HeaderComponent {

  constructor(
    private readonly translateService: TranslateService,
  ) {
  }

  public get nameOfLanguage(): string {
    return languageNameList[this.translateService.defaultLang];
  }

}
