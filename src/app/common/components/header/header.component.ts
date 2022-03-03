import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {languageNameList} from '@app/common/consts/app/language.const';
import {AlertController} from '@ionic/angular';
import {LanguageEnum} from '@app/common/enums/app/language.enum';

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
          <ion-button (click)="openAlertOfLanguageList()">
            <ion-label>{{ nameOfLanguage }}</ion-label>
            <ion-icon slot="end" name="language-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  `
})
export class HeaderComponent {

  private alertForLanguageIsOpened: boolean = false;

  constructor(
    private readonly translateService: TranslateService,
    private readonly alertController: AlertController,
  ) {
  }

  public get nameOfLanguage(): string {
    return languageNameList[this.translateService.defaultLang];
  }

  public openAlertOfLanguageList(): void {

    if (this.alertForLanguageIsOpened) {
      return;
    }

    this.alertForLanguageIsOpened = true;

    this.alertController.create({
      header: 'Language',
      keyboardClose: true,
      backdropDismiss: true,
      inputs: Object.values(LanguageEnum).map((codeOfLanguage: string) => {

        return {
          name: codeOfLanguage,
          type: 'radio',
          label: languageNameList[codeOfLanguage],
          value: codeOfLanguage,
          checked: codeOfLanguage === this.translateService.getDefaultLang()
        };

      }),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
            this.alertForLanguageIsOpened = false;
          }
        }, {
          text: 'Ok',
          handler: (codeOfLanguage: string) => {
            this.translateService.setDefaultLang(codeOfLanguage);
            this.alertForLanguageIsOpened = false;
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });

  }

}
