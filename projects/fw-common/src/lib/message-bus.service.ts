import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageBusService {

  constructor() { }
  private stringBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('')
  msg$ = this.stringBehaviorSubject.asObservable();

  public sendMessage(msg: string): void {
    this.stringBehaviorSubject.next(msg);
  }
}

