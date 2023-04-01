import mongoose from "mongoose";

const RoadmapSchema = new mongoose.Schema(
    {
        Day :{
            type : Number
          },
        topics : [{
            type : String
        }],
        assignments : [{
            type : String
        }],
        mcqs : [{
            type: mongoose.SchemaTypes.ObjectId,
          }],
        is_completed:{
            type: Boolean,
            default: false
        },
        is_locked :{
            type: Boolean,
            default: true
        }

    });

    export const Roadmap = mongoose.model("Roadmap", RoadmapSchema);
    export default {Roadmap}