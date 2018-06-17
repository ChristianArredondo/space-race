// CORE ANGULAR
import { Route } from '@angular/router';
// COMPONENTS
import {
  HomeComponent,
  ListsComponent,
  MemberListComponent,
  MessagesComponent
} from './containers';
// ROUTE GUARD
import { AuthGuard } from './guards';


export const routes: Route[] = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'members',
    component: MemberListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'lists',
    component: ListsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
