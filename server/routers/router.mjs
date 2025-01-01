import { Router } from "express";

//method get 
import { controller_get } from "../controller/get/controller_get.mjs";

//forms
import { form_products } from "../controller/get/form_products.mjs";
import { form_store } from "../controller/get/form_store.mjs";
import { form_user } from "../controller/get/form_user.mjs";
import { form_record } from "../controller/get/form_record.mjs";

//method post 
import { controller_post } from "../controller/post/controller_post.mjs";
import { controller_store } from "../controller/post/controller_post_store.mjs"; 
import { controller_post_product } from "../controller/post/controller_post_product.mjs";

//method delete
import { controller_delete } from "../controller/delete/controller_delete.mjs";

//method put 
import { controller_update_user } from "../controller/put/controller_update.mjs";
import { repeat } from "../middleware/repeated_data.mjs";

export const router = Router();

//! -----> split each methods in archive specify
router.get("/", controller_get); //-------> all products unregistered, 
router.get("/login", form_user); //--------> login  
router.get("/record", form_record) //-----> new record //? redirect but it is not registered  
router.get("/product", form_products);
router.get("/store", form_store);

router.post("/user", repeat , controller_post); //  Do further post
router.post("/user/my-store", controller_store); //change address name
router.post("/user/my-store/product/new-product", controller_post_product); //change address name

router.delete("/user/my-store/product", controller_delete); //change address name
router.put("/user", controller_update_user); //change address name
