import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { first, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public authForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService) {
    this.authForm = this._buildForm();
  }

  public onLogin() {
    this._authService.login(this.authForm.value).pipe(filter(v => !!v), first()).subscribe();
  }

  private _buildForm(): FormGroup {
    return this._formBuilder.group({
      username: [null],
      password: [null, { validators: [Validators.minLength(4), Validators.maxLength(8)] }]
    });
  }
}
