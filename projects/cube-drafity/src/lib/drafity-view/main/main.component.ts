import { Component, OnInit } from '@angular/core';
import {MessageBusService} from 'fw-common';

@Component({
  selector: 'cdr-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private subscription;
  constructor(private messageBus: MessageBusService) { }

  ngOnInit() {
      this.subscription = this.messageBus.msg$.subscribe(value => {
        console.log('MainComponent: ' + value);
      });
  }

  emit(value: string) {
    this.messageBus.sendMessage(value);
  }
}
