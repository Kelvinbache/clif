import { Router } from "express";
import { controller_get } from "../controller/controller_get.mjs";

const router = Router();

router.get("/", controller_get);

export { router };
