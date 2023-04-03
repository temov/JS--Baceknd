import { Router } from "express";

import CustomerController from "../controllers/customer.controller.js";

const customerRouter = Router();

const customerController = new CustomerController();

//Get all customers

customerRouter.get('/', async (req, res) => {

    const customers = await customerController.getAllCustomers();

    res.send(customers)
})

//: add New Customer
customerRouter.post('/', async (req, res) => {

    const { name, email, phone, address } = req.body;

    const customerData = {

        name: name,
        email: email,
        phone: phone,
        address: address
    }

    await customerController.addCustomers(customerData);

    res.status(201).send('New customer was created')

})

//:Get customer By ID
customerRouter.get('/:id', async (req, res) => {

    const customerId = req.params.id;

    const customer = await customerController.getAllCustomersById(customerId);
    res.send(customer);

})

//Update customer
customerRouter.patch('/:id', async (req, res) => {

    const customerId = req.params.id;

    const { name, phone, address } = req.body;

    const customerData = {

        name: name,
        phone: phone,
        address: address
    };
    try {
        await customerController.updateCustomerById(customerId, customerData);
        res.send({ message: `Customer with id : ${customerId} was updated` })

    } catch (error) {
        res.status(404).send({ message: error.message })
    }

})

customerRouter.delete('/:id', async (req, res) => {
    const customerId = req.params.id;

    await customerController.deleteCusotmerById(customerId);
    res.send(`Customer with id:${customerId} was deleted`)

})


export default customerRouter;