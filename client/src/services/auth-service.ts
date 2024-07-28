import { SignIn, User } from "../models";

import { axiosClient } from "./api-client";

export const authService = {
  signin(params: SignIn): Promise<User> {
    return axiosClient.post("/signin", params);
  },
};
