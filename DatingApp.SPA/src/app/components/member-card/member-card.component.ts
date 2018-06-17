// CORE ANGULAR
import { Component, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core';
// MODELS
import { User } from '../../models';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberCardComponent {
  @HostBinding('class.app-member-cars') cssClass = true;

  @Input() user: User;
}
