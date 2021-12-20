import { AuthTypes } from "../types/authTypes";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case AuthTypes.login:
      return { log: true };

    case AuthTypes.logout:
      return { log: false };

    default:
      return state;
  }
};
