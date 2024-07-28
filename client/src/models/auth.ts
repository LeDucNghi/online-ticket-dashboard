import { Ticket } from "./ticket";

export interface AuthState {
  isAuthenticated: boolean;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface User {
  email: string;
  password?: string;
  avatar: string;
  gender: "male" | "female";
  birthday?: Date;
  created_at?: Date;
  updated_at?: Date;
  preferred_payment_method: string;
  ticket: Ticket[];
  token?: string;
}
