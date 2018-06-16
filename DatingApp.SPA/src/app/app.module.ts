// CORE ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// CORE PROJECT
import { AppComponent } from './app.component';
import { ComponentsModule } from './components';
import { environment } from '../environments/environment';
import { ServicesModule } from './services';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store';
import { ValueEffects } from './effects';
// COMPONENTS
import { ValueComponent } from './value/value.component';
import { AuthEffects } from './effects/auth.effects';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AuthEffects, ValueEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
