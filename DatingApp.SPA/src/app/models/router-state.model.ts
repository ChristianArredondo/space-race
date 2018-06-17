 // CORE ANGULAR
 import { Params } from '@angular/router';

export interface RouterState {
  params: Params; // params
  queryParams: Params; // query params
  url: string; // full url
  mainRoute: string; // first name in route (i.e. 'localhost:4200/members' resolves to 'members')
}
