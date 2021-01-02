import { UserActionType, UserState, RootActionTypes } from "./store-types";

export const initialState: UserState = {
  user: {
    id: null,
    email: null,
    token: null,
  },
};

export function reducer(
  state: UserState = initialState,
  action: RootActionTypes
): UserState {
  switch (action.type) {
    case UserActionType.Login:
      return {
        ...state,
        user: { ...action.payload },
      };
    case UserActionType.Register:
      return {
        ...state,
        user: { ...action.payload },
      };
    case UserActionType.Logout:
      return {
        ...state,
        user: { id: null, email: null, token: null },
      };
    default:
      return state;
  }
}
