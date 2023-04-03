import { Router } from "express";
import productRouter from "../routes/products.router.js";


const router = Router();


router.get('/', (req, res) => {
    res.send("Server is live.")
});

router.use('/products', productRouter);

export default router;