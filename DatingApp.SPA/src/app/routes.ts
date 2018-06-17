import { Route } from '@angular/router';
import {
  HomeComponent,
  ListsComponent,
  MemberListComponent,
  MessagesComponent
} from './containers';

export const routes: Route[] = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'members',
    component: MemberListComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
