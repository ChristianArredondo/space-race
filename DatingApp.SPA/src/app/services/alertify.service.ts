// CORE ANGULAR
import { Injectable } from '@angular/core';

/** The TypeScript declare keyword is used to declare variables that may not have originated from a TypeScript file.  */
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  /** Open dialog to confirm a specific action. */
  public confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, (e) => {
      if (e) {
        okCallback();
      }
    });
  }

  public successAlert(message: string) {
    alertify.success(message);
  }

  public errorAlert(message: string) {
    alertify.error(message);
  }

  public warningAlert(message: string) {
    alertify.warning(message);
  }

  public messageAlert(message: string) {
    alertify.message(message);
  }
}
