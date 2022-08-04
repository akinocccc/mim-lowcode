import { Schema, model, connect, Types } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IUser {
  username: string;
  password: string;
  avatar: string;
}

interface IPage {
  page_name: string;
  components?: any;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: true },
});

export const UserModel = model<IUser>('User', userSchema);

const pageSchema = new Schema<IPage>({
  page_name: { type: String, required: true },
  components: { type: Array, required: false },
});

export const PageModel = model<IPage>('Editor', pageSchema);

run().catch((err) => console.log(err));

async function run() {
  // Connect to MongoDB
  await connect('mongodb://localhost:27017');
  console.log('db connected successfully');
}
