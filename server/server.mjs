import express from "express";
import { router } from "./routers/router.mjs";
import { join } from "path";

const app = express();
const port = 3000;

app.disable("x-powered-by");
app.use(express.json());


app.set("view engine", "ejs");
app.set('views', join(process.cwd(),'views'))

function url() {
  console.log(`http://localhost:${port}`);
}

//router get
app.use("/", router);
app.listen(port, url);

/**
 * takes:
 *
 * controllers : {
 *   1: Create new controllers for the method post img (See how to upload a file)
 *   2: Create the heads, for each get
 *   3: Cookies of each get,post, put or delete
 *   4: Place method http to each response
 * }
 *
 * Drive: {
 *  1: Drive error global
 *  2: Drive error controller post, get, delete, update
 *  3: Modify the drive error of base data
 * }
 *
 * Add to the server : {
 *   1: Crete middleware for drive the data
 * }
 *
 * url: {
 *  1: improve the url for each part the wed //! investigate about that
 * }
 *
 * remover : {
 * }
 *
 * modify: {
 *   package-json : {
 *   }
 *
 *   db : {
 *    1: add the method get if there is a filter
 *   }
 * }
 */
