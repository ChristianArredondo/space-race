import { authActions } from '../actions';

export interface State {
  token: string;
}

export const initialState: State = {
  token: null
};

export function reducer(state = initialState, action: authActions.AuthActions): State {
  switch (action.type) {
    case authActions.AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        token: action.payload
      };
    }
    case authActions.AuthActionTypes.Logout: {
      return initialState;
    }
    default:
      return state;
  }
}

export const getToken = (state: State) => state.token;
