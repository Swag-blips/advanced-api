import mongoose from "mongoose";
import bcyrpt from "bcrypt";
import config from "config";

export interface UserDocument extends  UserInput, mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserInput {
  email: string;
  name: string;
  password: string;
}
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  let user = this as UserDocument;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = await bcyrpt.genSalt(config.get<number>("saltWorkFactor"));

  const hash = await bcyrpt.hashSync(user.password, salt);

  user.password = hash;

  return next();
});

userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  const user = this as UserDocument;

  return bcyrpt.compare(password, user.password).catch((e) => false);
};
const User = mongoose.model<UserDocument>("User", userSchema);

export default User;
