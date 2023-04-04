import * as dotenv from "dotenv";
import mongoose from 'mongoose'

dotenv.config();

const MONGO_URL = process.env.MONGO_URL_DEV;

export const mongo_connection = async () => {
    try {
        
        await mongoose.connect(MONGO_URL, {
            dbName: "E-commerce_app" 
         })

        console.log("Connected to Mongo database.")

    } catch (error) {
        throw new Error("Connection to Mongo database failed.")
    }
};
