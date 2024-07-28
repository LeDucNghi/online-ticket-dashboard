import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, SchemaTypes, Types } from 'mongoose';

import { Theater } from './theater.schema';
import { User } from './user.schema';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
  @Prop({ type: SchemaTypes.ObjectId })
  id: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  genre: string[];

  @Prop({ required: true })
  director: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }] })
  casts: User[];

  @Prop()
  release_date: Date;

  @Prop()
  show_times: Date[];

  @Prop()
  poster_url: string;

  @Prop()
  trailer_url: string;

  @Prop()
  price: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Theater' }] })
  theater: Theater[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
