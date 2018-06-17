// CORE ANGULAR
import { Component, ChangeDetectionStrategy, HostBinding, Output, EventEmitter } from '@angular/core';
// MODELS
import { AuthForm } from '../../models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  @HostBinding('class.app-register') cssClass = true;

  @Output() register: EventEmitter<AuthForm>; // emits inputted `username` and `password` for new registration
  @Output() cancelRegistration: EventEmitter<void>; // sets `inRegisterMode` to false in parent container

  public registerFormModel: AuthForm; // model for registration template-driven form

  constructor() {
    this.cancelRegistration = new EventEmitter();
    this.register = new EventEmitter();
    this.registerFormModel = { username: null, password: null };
  }
}
