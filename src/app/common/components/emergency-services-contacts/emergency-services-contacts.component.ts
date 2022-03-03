import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-emergency-services-contacts',
  template: `
    <ion-card>
      <ion-card-header>
        <ion-card-title>{{ translateESCPath + '.title' | translate }}</ion-card-title>
      </ion-card-header>
      <ion-item detail="false" [href]="'tel:' + (translateESCOPrimaryPath + '.general.phone' | translate)" class="ion-text-wrap">
        <ion-icon name="color-filter-outline" slot="start"></ion-icon>
        <ion-label>{{ translateESCOPrimaryPath + '.general.phone' | translate }} - {{ translateESCOPrimaryPath + '.general.title' | translate }}</ion-label>
        <ion-icon name="call-outline" color="primary" slot="end"></ion-icon>
      </ion-item>
      <ion-item detail="false" [href]="'tel:' + (translateESCOPrimaryPath + '.police.phone' | translate)" class="ion-text-wrap">
        <ion-icon name="car-sport-outline" slot="start"></ion-icon>
        <ion-label>{{ translateESCOPrimaryPath + '.police.phone' | translate }} - {{ translateESCOPrimaryPath + '.police.title' | translate }}</ion-label>
        <ion-icon name="call-outline" color="primary" slot="end"></ion-icon>
      </ion-item>
      <ion-item detail="false" [href]="'tel:' + (translateESCOPrimaryPath + '.firefighters.phone' | translate)" class="">
        <ion-icon name="bonfire-outline" slot="start"></ion-icon>
        <ion-label>{{ translateESCOPrimaryPath + '.firefighters.phone' | translate }} - {{ translateESCOPrimaryPath + '.firefighters.title' | translate }}</ion-label>
        <ion-icon name="call-outline" color="primary" slot="end"></ion-icon>
      </ion-item>
      <ion-item detail="false" [href]="'tel:' + (translateESCOPrimaryPath + '.ambulance.phone' | translate)" class="">
        <ion-icon name="medkit-outline" slot="start"></ion-icon>
        <ion-label>{{ translateESCOPrimaryPath + '.ambulance.phone' | translate }} - {{ translateESCOPrimaryPath + '.ambulance.title' | translate }}</ion-label>
        <ion-icon name="call-outline" color="primary" slot="end"></ion-icon>
      </ion-item>
    </ion-card>
    <ion-card>
    <ion-accordion-group>
      <ion-accordion value="colors">
        <ion-item detail="false" slot="header">
          <ion-label>{{ translateESCOtherPath + '.title' | translate }}</ion-label>
        </ion-item>

        <ion-list slot="content">
          <ion-item detail="false" [href]="'tel:' + (translateESCOtherPath + '.energetic.phone' | translate)" class="ion-text-wrap">
            <ion-icon name="color-filter-outline" slot="start"></ion-icon>
            <ion-label>{{ translateESCOtherPath + '.energetic.phone' | translate }} - {{ translateESCOtherPath + '.energetic.title' | translate }}</ion-label>
            <ion-icon name="call-outline" color="primary" slot="end"></ion-icon>
          </ion-item>
          <ion-item detail="false" [href]="'tel:' + (translateESCOtherPath + '.gas.phone' | translate)" class="ion-text-wrap">
            <ion-icon name="car-sport-outline" slot="start"></ion-icon>
            <ion-label>{{ translateESCOtherPath + '.gas.phone' | translate }} - {{ translateESCOtherPath + '.gas.title' | translate }}</ion-label>
            <ion-icon name="call-outline" color="primary" slot="end"></ion-icon>
          </ion-item>
          <ion-item detail="false" [href]="'tel:' + (translateESCOtherPath + '.thermal.phone' | translate)" class="">
            <ion-icon name="bonfire-outline" slot="start"></ion-icon>
            <ion-label>{{ translateESCOtherPath + '.thermal.phone' | translate }} - {{ translateESCOtherPath + '.thermal.title' | translate }}</ion-label>
            <ion-icon name="call-outline" color="primary" slot="end"></ion-icon>
          </ion-item>
          <ion-item detail="false" [href]="'tel:' + (translateESCOtherPath + '.waterSupply.phone' | translate)" class="">
            <ion-icon name="medkit-outline" slot="start"></ion-icon>
            <ion-label>{{ translateESCOtherPath + '.waterSupply.phone' | translate }} - {{ translateESCOtherPath + '.waterSupply.title' | translate }}</ion-label>
            <ion-icon name="call-outline" color="primary" slot="end"></ion-icon>
          </ion-item>
        </ion-list>
      </ion-accordion>
    </ion-accordion-group>
    </ion-card>
  `
})
export class EmergencyServicesContactsComponent {
  public readonly translateESCPath: string = 'main.emergencyServicesContacts';
  public readonly translateESCOPrimaryPath: string = 'main.emergencyServicesContacts.primary';
  public readonly translateESCOtherPath: string = 'main.emergencyServicesContacts.other';

  constructor(
    private readonly translateService: TranslateService,
  ) {
  }

}
