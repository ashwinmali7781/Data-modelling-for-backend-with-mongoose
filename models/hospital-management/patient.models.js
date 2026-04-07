import mongoose from "mongoose";

const medicalSchema = new mongoose.Schema({}, { timestamps: true });

export const Patient = mongoose.model("Medical",medicalSchema);

