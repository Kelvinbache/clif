import { Router } from "express";
import { controller_get } from "../controller/controller_get.mjs";
import { controller_post } from "../controller/controller_post.mjs";

const router = Router();

router.get("/", controller_get);
router.post("/", controller_post);

export { router };
