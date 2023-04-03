import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
   

    customer_id: [
        {
            type: Schema.Types.ObjectId,
            ref: "Customer" // Will give us access to populate method
            
        }
    ]
});

export default orderSchema;