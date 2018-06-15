import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public authForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.authForm = this._buildForm();
  }

  public onLogin() {
    console.log(this.authForm);
  }

  private _buildForm(): FormGroup {
    return this._formBuilder.group({
      email: [null, { validators: Validators.email }],
      password: [null, { validators: [Validators.minLength(4), Validators.maxLength(8)] }]
    });
  }
}
