import mongoose, { model } from "mongoose";


const ShelfSchema = new mongoose.Schema({
    _id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    created_at: { type: Date, default: Date.now }
});

export default model("Shelf", ShelfSchema);
