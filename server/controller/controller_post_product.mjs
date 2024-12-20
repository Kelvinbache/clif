import { db } from "../../db/sqlite.mjs";
import { drive_db } from "../../db/driver/drive_db.mjs";
import { Validate } from "../middleware/validate.mjs";

export function controller_post_product(req, res, next) {
  const middleware = Validate(req.body, req.originalUrl);

  if (middleware) {
    res.status(400).json(middleware);
    next();
  } else {
    const { name, description, prince, type } = req.body;
    const product = db.prepare(
      `INSERT INTO product (product_name, product_description, product_prince, product_type) VALUES(?,?,?,?)`,
      drive_db
    );
    product.run([name, description, prince, type]);

    res.json("send");
  }
}
