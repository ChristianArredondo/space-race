 // CORE ANGULAR
 import { Params } from '@angular/router';

export interface RouterState {
  params: Params;
  queryParams: Params;
  url: string;
  mainRoute: string; // first name in route (i.e. 'localhost:4200/members' resolves to 'members')
}
