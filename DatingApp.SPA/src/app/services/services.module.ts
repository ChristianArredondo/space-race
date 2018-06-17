import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AlertifyService } from './alertify.service';
import { ApiValuesService } from './api-values.service';
import { ApiAuthService } from './api-auth.service';
import { ApiUsersService  } from './api-users.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [AlertifyService, ApiValuesService, ApiAuthService, ApiUsersService]
})
export class ServicesModule { }
