import { drive_db } from "../driver/drive_db.mjs";

export function insert_products(data) {
  const insert_product = db.prepare(`INSERT INTO product (product_name, product_description, product_prince, product_type) VALUES(?,?,?,?)`);
  insert_product.run(data);
  insert_product.finalize(drive_db);
}


export function insert_user(data) {
  const insert_user = db.prepare(`INSERT INTO user (name,last_name,email,phone) VALUES(?,?,?,?)`);
  insert_user.run(data);
  insert_user.finalize(drive_db);
}


export function insert_stores(data) {
  const insert_store = db.prepare(`INSERT INTO store (store_name,address,state_store) VALUES(?,?,?)`);
  insert_store.run(data);
  insert_store.finalize(drive_db);
}
