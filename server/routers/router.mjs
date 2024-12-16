import { Router } from "express";
import { controller_get } from "../controller/controller_get.mjs";
import { controller_post } from "../controller/controller_post.mjs";
import { controller_store } from "../controller/controller_post_store.mjs";
import { controller_post_product } from "../controller/controller_post_product.mjs";
import { controller_delete } from "../controller/controller_delete.mjs";
import { controller_update_user } from "../controller/controller_update.mjs";

const router = Router();

//! -----> split each methods in archive specify 
router.get("/", controller_get);
router.post("/user", controller_post); //  Do further post
router.post("/user/my-store", controller_store);
router.post("/user/my-store/product/new-product", controller_post_product);
router.delete("/user/my-store/product", controller_delete);
router.put("/user", controller_update_user);
