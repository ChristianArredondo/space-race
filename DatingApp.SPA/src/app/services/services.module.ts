import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApiValuesService } from './api-values.service';
import { ApiAuthService } from './api-auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [ApiValuesService, ApiAuthService]
})
export class ServicesModule { }
