import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// CORE
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ServicesModule } from './services';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ValueEffects } from './effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([ValueEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
