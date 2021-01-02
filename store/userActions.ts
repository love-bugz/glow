import { UserActionType, AppThunk, User, RootActionTypes } from "./store-types";
import axios from "axios";
import {
  setAsyncStorageItems,
  removeAsyncStorageItems,
} from "../utils/asyncStorageFunctions";

// REGISTER ACTIONS

function setRegister(newUser: User): RootActionTypes {
  return {
    type: UserActionType.Register,
    payload: newUser,
  };
}

export const register = (
  user_email: Partial<User>["email"]
): AppThunk<void> => async (dispatch) => {
  try {
    const registeredUser: User = await axios.post("", { email: user_email });
    const { id, email, token } = registeredUser;
    await setAsyncStorageItems([
      ["user_id", id as string],
      ["user_email", email as string],
      ["user_token", token as string],
    ]);
    dispatch(setRegister(registeredUser));
  } catch (err) {
    throw err;
  }
};

// LOGIN ACTIONS

function setLogin(user: User): RootActionTypes {
  return {
    type: UserActionType.Login,
    payload: user,
  };
}

export const login = (
  user_email: Partial<User>["email"]
): AppThunk<void> => async (dispatch) => {
  try {
    const loggedInUser: User = await axios.post("", { email: user_email });
    const { id, email, token } = loggedInUser;
    await setAsyncStorageItems([
      ["user_id", id as string],
      ["user_email", email as string],
      ["user_token", token as string],
    ]);
    dispatch(setLogin(loggedInUser));
  } catch (err) {
    throw err;
  }
};

// LOGOUT ACTIONS

function userLogout(): RootActionTypes {
  return {
    type: UserActionType.Logout,
  };
}

export const logout = (): AppThunk<void> => async (dispatch) => {
  try {
    await removeAsyncStorageItems(["user_id", "user_email", "user_token"]);
    dispatch(userLogout());
  } catch (err) {
    throw err;
  }
};
