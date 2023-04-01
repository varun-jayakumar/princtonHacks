import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
    {
        day: {
            type : String
        },
        hours: {
            type : String
        },
        level: {
            type : String
        },
        topic: {
            type : String
        },
        Roadmap: [{
            type: mongoose.SchemaTypes.ObjectId,
            required: true
          }],
        user : {
            type: mongoose.SchemaTypes.ObjectId,
        }
    });

    export const Roadmap = mongoose.model("roadmap", educationSchema);