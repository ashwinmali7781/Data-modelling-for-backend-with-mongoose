import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    diagnosis: {
      type: String,
      required: true,
      trim: true,
    },
    symptoms: {
      type: [String],
    },
    medications: [
      {
        name: String,
        dosage: String,
        duration: String,
      },
    ],
    tests: [
      {
        testName: String,
        result: String,
        date: Date,
      },
    ],
    notes: {
      type: String,
    },
    visitDate: {
      type: Date,
      default: Date.now,
    },
    followUpDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["ongoing", "completed", "cancelled"],
      default: "ongoing",
    },
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);