import { db } from "../../db/sqlite.mjs";
import { drive_db } from "../../db/driver/drive_db.mjs";

export function controller_post_product(req, res, next) {
  const { name, description, prince, type } = req.body;
  const product = db.prepare(
    `INSERT INTO product (product_name, product_description, product_prince, product_type) VALUES(?,?,?,?)`,
    drive_db
  );
  product.run([name, description, prince, type]);

  res.json("send");
}
