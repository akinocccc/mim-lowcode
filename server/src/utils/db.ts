import { Schema, model, connect, Types } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IUser {
  username: string;
  password: string;
  avatar: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: true },
});

// 3. Create a Model.
export const User = model<IUser>('User', userSchema);

run().catch((err) => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  await connect('mongodb://localhost:27017');
  console.log('db connected successfully');
}
