// CORE ANGULAR
import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValueComponent {
  @HostBinding('class.app-value') cssClass = true;
}
