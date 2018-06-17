import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AlertifyService } from './alertify.service';
import { ApiAuthService } from './api-auth.service';
import { ApiUsersService  } from './api-users.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [AlertifyService, ApiUsersService, ApiAuthService, ApiUsersService]
})
export class ServicesModule { }
