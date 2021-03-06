import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Observable} from "rxjs/Observable";
import "rxjs";

@Injectable()


export class AlertService {
  private subject = new Subject<any>();

  constructor() { }

  success(message: string) {
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string) {
    this.subject.next({ type: 'error', text: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
