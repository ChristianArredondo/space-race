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
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'members',
        component: MemberListComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent
      },
      {
        path: 'lists',
        component: ListsComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
