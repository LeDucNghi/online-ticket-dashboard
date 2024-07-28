import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

import { Ticket } from './ticket.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  avatar: string;

  @Prop({ required: true })
  gender: 'male' | 'female';

  @Prop()
  birthdate: Date;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;

  @Prop()
  preferred_payment_method: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }] })
  tickets: Ticket[];
}

export const UserSchema = SchemaFactory.createForClass(User);
