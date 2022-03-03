import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from '@app/common/components/header/header.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent,
  ]
})
export class HeaderModule {
}
