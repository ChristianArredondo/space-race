// CORE ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// COMPONENTS
import { NavComponent } from './nav';
// NGX-BOOTSTRAP
import { BsDropdownModule } from 'ngx-bootstrap';

const components = [NavComponent];

/** Feature module used to share presentational components */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot()
  ],
  declarations: components,
  exports: components
})
export class ComponentsModule { }
