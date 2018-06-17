// CORE ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// CORE PROJECT
import { AppComponent } from './app.component';
import { ComponentsModule } from './components';
import { environment } from '../environments/environment';
import { ServicesModule } from './services';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer, metaReducers, reducers } from './store';
import { AuthEffects, RouterEffects, ValueEffects } from './effects';
// COMPONENTS
import { HomeComponent, ListsComponent, MemberListComponent, MessagesComponent, RegisterComponent } from './containers';

import { routes } from 'src/app/routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([AuthEffects, RouterEffects, ValueEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    RouterModule.forRoot(routes, { useHash: false }),
    ServicesModule,
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
