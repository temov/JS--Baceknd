import mongoose from "mongoose";

import productSchema from "../mongo-schemas/product.schema.js";

class ProductModel{

    mongo_model;
    constructor(){

        this.mongo_model = mongoose.model("Product", productSchema, 'Products')
    }

    async getAllProducts(){
        const products = await this.mongo_model.find() 

        return products
    };

    async getProductById(productId){
        const product = await this.mongo_model.findById(productId);

        return product;
    }

    async addProduct(productData) {
     
        const product = new this.mongo_model(productData);

        const response = await product.save();

         console.log(response) 
    };

    async searchProduct(keyword){
        const product = await this.mongo_model.find({name: { $regex: keyword }});//matches all products with the keword included in the name property

        return product;
    }
}

export default ProductModel