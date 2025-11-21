import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minLength: 5,
            maxLength: 20
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minLength: 5,
            maxLength: 20
        },
        password: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 50
        }
    },
    {
        timestamps: true
    }
);

export const User = mongoose.model("User", userSchema);