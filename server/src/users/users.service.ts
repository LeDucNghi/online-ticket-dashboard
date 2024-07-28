import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

// This should be a real class/interface representing a user entity
export type Users = any;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<Users | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async create(email: string, password: string): Promise<User> {
    try {
      const createdUser = new this.userModel({
        email: email,
        password: password,
      });

      const user = createdUser.save();

      return user;
    } catch (error) {
      console.log('🚀 ~ UsersService ~ create ~ error:', error);
    }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
