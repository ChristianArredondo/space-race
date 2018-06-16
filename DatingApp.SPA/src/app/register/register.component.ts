import { Component, ChangeDetectionStrategy, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  @HostBinding('class.app-register') cssClass = true;

  @Output() cancelRegistration: EventEmitter<void>; // sets `inRegisterMode` to false in parent container

  public registerFormModel: { username: string; password: string }; // model for registration template-driven form

  constructor() {
    this.registerFormModel = { username: null, password: null };
    this.cancelRegistration = new EventEmitter();
  }

  onRegister() {
    console.log(this.registerFormModel);
  }

  cancel() {
    console.log('Registration cancelled');
  }

}
