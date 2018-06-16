import { Action } from '@ngrx/store';


export interface State {
  token: string;
}

export const initialState: State = {
  token: null
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
