import ProductModel from "../models/products.model.js";

const productModel = new ProductModel();

class ProductsController {
    async getAllProducts(){
        const products = await productModel.getAllProducts();

        return products;
    };

    async getProductById(productId){
        const product = await productModel.getProductById(productId);

        return product
    }

    async addProduct(productData){
        await productModel.addProduct(productData);
    };

    async searchProduct(keyword){

        const foundProduct = await productModel.searchProduct(keyword);

        return foundProduct;
    }

   

};

export default ProductsController;