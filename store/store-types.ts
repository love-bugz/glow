import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { AxiosResponse } from "axios";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  UserState,
  unknown,
  Action<string>
>;

export type RootActionTypes = RegisterAction | LoginAction | LogoutAction;

export enum UserActionType {
  Register = "REGISTER",
  Login = "LOGIN",
  Logout = "LOGOUT",
}

export interface UserState {
  user: User;
}

interface RegisterAction {
  type: typeof UserActionType.Register;
  payload: User;
}

interface LoginAction {
  type: typeof UserActionType.Login;
  payload: User;
}

interface LogoutAction {
  type: typeof UserActionType.Logout;
}

export interface User {
  id: string | null;
  email: string | null;
  token: string | null;
}
