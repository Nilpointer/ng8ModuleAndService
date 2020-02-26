import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FwCommonModule, MessageBusService} from 'fw-common';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CubeDrafityModule, DrafityViewModule} from 'cube-drafity';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FwCommonModule,
    NoopAnimationsModule,
    CubeDrafityModule,
    DrafityViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private subscription;
  constructor(private messageBus: MessageBusService) {
    this.subscription = messageBus.msg$.subscribe(value => {
      console.log('wrapper appmodule: ' + value);
    });
  }
}
