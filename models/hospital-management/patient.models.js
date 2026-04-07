import mongoose from "mongoose";

const medicalSchema = new mongoose.Schema({}, { timestamps: true });

export const patient = mongoose.model("Medical",medicalSchema);

