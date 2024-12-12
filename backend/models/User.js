import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ["Student", "Teacher"], default: "Student" },
  
  phoneNumber: { type: String },
  institutionName: { type: String },
  city: { type: String },
  degreeType: { type: String },
  degreeName: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  association: { type: String, enum: ["Full-Time", "Part-Time"] },
  speciality: { type: String },
});

// Hash password before saving user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare input password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
