import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';

import {HomePageRoutingModule} from './home-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {HeaderModule} from '@app/common/components/header/header.module';
import {
  EmergencyServicesContactsModule
} from '@app/common/components/emergency-services-contacts/emergency-services-contacts.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TranslateModule,
    HeaderModule,
    EmergencyServicesContactsModule
  ],
  declarations: [
    HomePage,
  ]
})
export class HomePageModule {
}
