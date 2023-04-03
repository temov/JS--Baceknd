import {Router} from 'express';

import ProductsController from '../controllers/products.controller.js';

const productRouter = Router();

const productController = new ProductsController;

// GET ALL PRODUCTS
productRouter.get("/", async (req, res) => {
    const products = await productController.getAllProducts();

    res.send(products)
});

// ADD PRODUCT
productRouter.post("/", async(req, res) => {
    const {name, description, price,reviews} = req.body;

    const productData = {
        name: name,
        description: description,
        price: price,
        reviews:reviews
    };

    await productController.addProduct(productData);

    res.status(201).send({message: "New product is created."})
});

// GET PRODUCT BY ID
productRouter.get('/:id', async(req, res) => {
    const productId = req.params.id;

    const product = await productController.getProductById(productId);

    res.send(product);
});
productRouter.post('/', async(req, res) => {

    const{name} = req.body
    const product = await productController.searchProduct(name);

    res.send(product);
});
export default productRouter;