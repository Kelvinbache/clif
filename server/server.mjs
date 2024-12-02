import express from "express";
import { router } from "./routers/get.mjs";

const app = express();
const port = 3000;

function url() {
  console.log(`http://localhost:${port}`);
}

//router get
app.use("/", router);
app.listen(port, url);
