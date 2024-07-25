import { model, models, Schema } from "mongoose";

export interface IEvent extends Document {
  title: string;
  description: string;
  locations?: string;
  createdAt?: Date;
  imageUrl: string;
  startDateTime?: Date;
  endDateTime?: Date;
  price?: string;
  isFree?: boolean;
  url?: string;
  category: { _id: string; name: string };
  organizer: { _id: string; firstName: string; LastName: string };
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
});

const User = models.User || model("User", UserSchema);

export default User;
