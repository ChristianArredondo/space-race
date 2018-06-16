// CORE ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// COMPONENTS
import { NavComponent } from './nav';

const components = [NavComponent];

/** Feature module used to share presentational components */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: components,
  exports: components
})
export class ComponentsModule { }
