
import mongoose from "mongoose";

const McqSchema = new mongoose.Schema({

    question: {
        type: String
    },
    options : [{
        type : String
    }],
    answer : {
        type : String
    }

});


export const Mcq = mongoose.model("Mcq", McqSchema);
export default {Mcq};
