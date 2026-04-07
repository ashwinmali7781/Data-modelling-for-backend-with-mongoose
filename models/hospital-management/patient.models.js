import mongoose from "mongoose";

const medicalSchema = new mongoose.Schema({}, { timestamps: true });

export const medicalRecord = mongoose.model("Medical",medicalSchema);

