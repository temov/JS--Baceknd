import CustomerModel from "../models/customer.model.js";

const customerModel = new CustomerModel();

class CustomerController{

    async getAllCustomers(){

        const customers = await customerModel.getAllCustomers();

        return customers;
    }

    async addCustomers(customerData){
        await customerModel.addCustomer(customerData);

    }

    async getAllCustomersById(customerId){
        const customer = await customerModel.getCustomerById(customerId);
        return customer;
    }

    async updateCustomerById(customerId,customerData){

        await customerModel.updateCustomer(customerId,customerData)
    }

    async deleteCusotmerById(customerId){

        await customerModel.deleteCustomer(customerId);
    }
}

export default CustomerController;