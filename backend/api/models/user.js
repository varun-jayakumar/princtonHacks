import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
    phoneNumber: {
		type: Number,
		required: true
	},
    learnings: [{
        type: mongoose.SchemaTypes.ObjectId,
    }],
	verified: {
		type: Boolean,
		default: false
	},
}, {
	versionKey: false
});

export const user = mongoose.model("user", userSchema);