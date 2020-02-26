import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrafityViewRoutingModule } from './drafity-view-routing.module';
import { MainComponent } from './main/main.component';
import {MessageBusService} from 'fw-common';
import { InnerViewComponent } from './inner-view/inner-view.component';



@NgModule({
  declarations: [MainComponent, InnerViewComponent],
  imports: [
    CommonModule,
    DrafityViewRoutingModule,
  ],
  exports: [MainComponent]
})
export class DrafityViewModule {
  private subscription;
  constructor(private messageBus: MessageBusService) {
    this.subscription = messageBus.msg$.subscribe(value => {
      console.log('DrafityViewModule ' + value);
    });
  }
}
