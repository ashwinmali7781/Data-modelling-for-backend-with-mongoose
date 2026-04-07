import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({}, { timestamps: true });

export const medicalRecord = mongoose.model("Hospital",hospitalSchema);

