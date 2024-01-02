import express from "express";

import { isAdmin, isAuthenticatedUser, } from "../middleware/auth.js";

import { createProduct, getAllProduct, getSingleProductController, productCountController, productListController } from "../controllers/ProductController.js";




const router = express.Router();





router.post("/create-product", createProduct);




//get products
router.get("/get-product", getAllProduct);

// //single product
router.get("/get-product/:id", getSingleProductController);




// //product count
router.get("/product-count", productCountController);

// //product per page
router.get("/product-list/:page", productListController);




export default router;



