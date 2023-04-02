import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
    {
        day: {
            type : Number,
            default: 0
        },

        learningId:{
            type: mongoose.SchemaTypes.ObjectId,
        }

          });

          export const learnings = mongoose.model("learnings", educationSchema);
          export default {learnings}