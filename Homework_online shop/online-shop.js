import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

router.get("/", (request, response) => {
    console.log(request);
   
    response.send("<h1>Default route / using express =)</h1>")
});

//Get all products

router.get("/products", (request, response) => { // localhost:3000 => default route
    console.log(request);
    const products = fs.readFileSync("./products.json", {encoding: "utf-8"});
    console.log(products)
    response.send(products)
    return products;
});

//Get product with given id

router.get("/product/:id", (request, response) => {

    
    
    const pathParams = request.params;
    console.log(pathParams)
    const products = fs.readFileSync("./products.json", {encoding: "utf-8"});
    const productFound = JSON.parse(products).find((product) => product.id === pathParams.id);

    if(productFound){
        response.send(JSON.stringify(productFound))
    }else {
        response.status(404).send({message: "Product not found."})
    }
});

//Add new product to product.json file

router.post("/product", (request, response) => {

    const body = request.body; 
    const products = fs.readFileSync("./products.json", {encoding: "utf-8"});
    const parsedProducts = JSON.parse(products)
    
    const newProduct = {
        id:uuidv4(),
        name:body.name,
        price:body.price,
        rating:body.rating,
        description:body.description,
        category:body.category,
        inStock: true
    };

    parsedProducts.push(newProduct)
    console.log(parsedProducts)

    fs.writeFileSync("./products.json", JSON.stringify(parsedProducts, null, 2));
    response.status(201).send({message: "Product has been added in products.json file."})
});



//Set product to be out of stock

router.patch("/product/:id",(request, response) => {
    const id = request.params.id;

    const products = fs.readFileSync("./products.json", {encoding: "utf-8"});
    const parsedProducts = JSON.parse(products)

   

    const editedProducts = parsedProducts.map((product) => {
        if(product.id === id){
            product.inStock = false;
            return product;

        }
        return product;
    })


    fs.writeFileSync("./products.json", JSON.stringify(editedProducts, null, 2));

    response.sendStatus(200)
})

//Delete product by id

router.delete("/product/:id",(request, response) => {
    const id = request.params.id;

    const products = fs.readFileSync("./products.json", {encoding: "utf-8"});
    const parsedProducts = JSON.parse(products)

    const filteredProducts = parsedProducts.filter((product) => product.id !== id);

    if(filteredProducts.length === parsedProducts.length){
        response.status(404).send({message: `Product with id: ${id} does not exist.`});
        return;
    }


    fs.writeFileSync("./products.json", JSON.stringify(filteredProducts, null, 2));

    response.sendStatus(200)
})


// Remove all products
router.delete("/products",(request, response) => {
    

    const products = fs.readFileSync("./products.json", {encoding: "utf-8"});
    const parsedProducts = JSON.parse(products)


    if(parsedProducts){
        parsedProducts.length = 0;
        return;
    }


    fs.writeFileSync("./products.json", JSON.stringify(parsedProducts));

    response.status(200).send({message: `All products have been deleted`});
})
 
//BONUS requrements

router.post('/cart/:id',(request, response)=>{
    const id = request.params.id;

    const products = fs.readFileSync("./products.json", {encoding: "utf-8"});
    const parsedProducts = JSON.parse(products)

    const productFound = parsedProducts.find((product) => product.id === id);

    if(productFound){
        const carts = fs.readFileSync("./cart.json", {encoding: "utf-8"});
        const parsedCarts = JSON.parse(carts);
        parsedCarts.push(productFound);
        fs.writeFileSync('./cart.json',JSON.stringify(parsedCarts,null,2))
    }else {
        response.status(404).send({message: "Product not found."})
    }


})


export default router;