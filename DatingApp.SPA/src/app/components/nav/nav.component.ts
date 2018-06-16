import { Component, ChangeDetectionStrategy, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  @HostBinding('class.app-nav') cssClass = true;

  @Input() authForm: FormGroup; // auth-related FormGroup, constructed in parent container
  @Input() isAuth: boolean; // determines nav UI
  @Input() authUsername: string; // username of currently-authenticated User

  @Output() login: EventEmitter<void>; // emitted when User submits login form
  @Output() logout: EventEmitter<void>; // emitted when User clicks on logout button

  constructor() {
    this.login = new EventEmitter();
    this.logout = new EventEmitter();
  }
}
