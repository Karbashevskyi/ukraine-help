import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TargetPageRoutingModule} from './target-routing.module';

import {TargetPage} from './target.page';
import {HeaderModule} from '@app/common/components/header/header.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TargetPageRoutingModule,
    HeaderModule,
    TranslateModule
  ],
  declarations: [
    TargetPage
  ]
})
export class TargetPageModule {
}
