import mongoose from "mongoose";
const {Schema} = mongoose;

const customerSchema = new Schema({

    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }
})

export default customerSchema;