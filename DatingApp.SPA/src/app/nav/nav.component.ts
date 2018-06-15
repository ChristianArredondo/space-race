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
  @Input() authForm: FormGroup;
  @Output() login: EventEmitter<void>;

  constructor() {
    this.login = new EventEmitter();
  }
}
