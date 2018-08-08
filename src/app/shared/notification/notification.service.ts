import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationService {
  private subject = new Subject();
  notification$ = this.subject.asObservable();

  emit(notification) {
    this.subject.next(notification);
  }

}
