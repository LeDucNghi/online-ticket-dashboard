import { Theater } from "./theater";
import { User } from "./auth";

export interface Movie {
  id: string;
  title: string;
  description: string;
  genre: string[];
  director: string;
  casts: User[];
  realease_date: Date;
  show_times: Date[];
  poster_url: string;
  trailer_url: string;
  price: string;
  theater: Theater[];
}
