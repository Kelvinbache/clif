import { db } from "../../sqlite.mjs";
import { drive_db } from "../errors/drive_db.mjs";

export function insert_products() {
  const insert_product = db.prepare(
    `INSERT INTO product (product_name, product_description, product_prince, product_type) VALUES(?,?,?,?)`
  );

  insert_product.run(
    "movil",
    "The movil further intelligent",
    100.6,
    "technology"
  );
  insert_product.finalize(drive_db);
}
