import mongoose from "mongoose";
import customerSchema from "../mongo_schemas/customer.schema.js";

class CustomerModel{

    mongo_model;// product model for Mongo DB
    constructor(){

        this.mongo_model = mongoose.model('Customer',customerSchema,'Customers')
    }

    async getAllCustomers(){

        const customers = this.mongo_model.find()//return all customers
        return customers;
    }

    async addCustomer(customerData){
        const addedCustomer = new this.mongo_model(customerData);

        const response = await addedCustomer.save();
        console.log(response);

    }

    async getCustomerById(customerId){

         const foundCustomer = await this.mongo_model.findById(customerId);
         return foundCustomer;
    }

    async updateCustomer(customerId,customerData){

        const customer = await this.mongo_model.findById(customerId);
        if(!customer){
            throw new Error(`Customer with id:${customerId} was not found`)
        }
        await this.mongo_model.updateOne({_id:customerId},{

            name: customerData.name || customer.name,
            phone: customerData.phone || customer.phone,
            address: customerData.address || customer.address
        })
    }

    async deleteCustomer(customerId){

        await this.mongo_model.findByIdAndDelete(customerId);
    }
}

export default CustomerModel;