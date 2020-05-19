import mongoose from "mongoose";

export default function MongooseConnect(){
    return mongoose.connect(
        `
        mongodb+srv://luancma_admin:nasa@cluster-test-imbnp.mongodb.net/test?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
      );
}