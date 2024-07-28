import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type TheaterDocument = HydratedDocument<Theater>;

@Schema()
export class Theater {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  location: string[];

  @Prop()
  country: string[];

  @Prop({ required: true })
  phone_number: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  website: string;

  @Prop({ required: true })
  number_of_screens: number;

  @Prop()
  facilities: string;

  @Prop()
  opening_hours: Date;

  @Prop()
  closing_hours: string;

  @Prop()
  special_events: string;

  @Prop()
  created_at: string;

  @Prop()
  updated_at: string;
}

export const TheaterSchema = SchemaFactory.createForClass(Theater);
