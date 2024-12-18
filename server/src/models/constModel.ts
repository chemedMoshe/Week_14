import { model, Schema } from "mongoose";

export const constSchema = new Schema({
    description: {
        type: String,
    },
    amount: {
        type: Number,
    }
},
    { timestamps: true }
);

export type Const = ReturnType<()=> typeof constSchema>

export const constModel = model('Const', constSchema);