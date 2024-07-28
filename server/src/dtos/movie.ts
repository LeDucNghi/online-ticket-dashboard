import { Theater } from 'src/schemas/theater.schema';
import { User } from 'src/schemas/user.schema';

export interface Movie {
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
