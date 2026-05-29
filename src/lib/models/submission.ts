import mongoose, { type Document, type Model } from "mongoose";

export interface ISubmission extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const submissionSchema = new mongoose.Schema<ISubmission>(
  {
    firstName: { type: String, required: true, maxlength: 100, trim: true },
    lastName:  { type: String, required: true, maxlength: 100, trim: true },
    email:     { type: String, required: true, maxlength: 254, trim: true, lowercase: true },
    phone:     { type: String, maxlength: 25,  trim: true },
    message:   { type: String, required: true, maxlength: 5000, trim: true },
  },
  { timestamps: true },
);

// Prevent model re-compilation on hot-reload
const Submission: Model<ISubmission> =
  (mongoose.models.Submission as Model<ISubmission>) ||
  mongoose.model<ISubmission>("Submission", submissionSchema);

export { Submission };
