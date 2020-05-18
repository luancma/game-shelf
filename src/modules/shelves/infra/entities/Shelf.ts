import mongoose, { model } from 'mongoose';

export interface ShelfInterface extends mongoose.Document {
  _id: string;
  games: any[];
}

const ShelfSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  games: {
    type: Array,
  },
  created_at: { type: Date, default: Date.now },
});

export default model<ShelfInterface>('Shelf', ShelfSchema);
