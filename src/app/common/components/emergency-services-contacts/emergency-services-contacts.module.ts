import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {
  EmergencyServicesContactsComponent
} from '@app/common/components/emergency-services-contacts/emergency-services-contacts.component';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
  ],
  exports: [
    EmergencyServicesContactsComponent
  ],
  declarations: [
    EmergencyServicesContactsComponent,
  ]
})
export class EmergencyServicesContactsModule {
}
