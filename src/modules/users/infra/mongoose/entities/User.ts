import mongoose, { model, Document } from 'mongoose';

export interface IUserEntity extends Document {
  name: string;
  email: string;
  nickname: string;
  password: string;
  created_at: Date;
}

const UserSchema = new mongoose.Schema({
  name: { required: true, type: String },
  email: { required: true, type: String, unique: true },
  nickname: { required: true, type: String, unique: true },
  password: { required: true, type: String },
  created_at: { type: Date, default: Date.now },
});

export default model<IUserEntity>('User', UserSchema);
