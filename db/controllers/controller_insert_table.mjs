import { db } from "../sqlite.mjs";

function insert_users() {
  const insert_user = db.prepare(
    `INSERT INTO user (name,last_name,email,phone) VALUES(?,?,?,?)`
  );

  insert_user.run("manuel", "abache", "manuel_abache@gmail.com", "0412789556");
  insert_user.finalize();
}

function insert_stores() {
  const insert_store = db.prepare(
    `INSERT INTO store (store_name,address,state_store) VALUES(?,?,?)`
  );

  insert_store.run("production_js", "19 av entre call 1 and 2", "zulia");
  insert_store.finalize();
}

function insert_products() {
  const insert_product = db.prepare(
    `INSERT INTO product (product_name, product_description, product_prince, product_type) VALUES(?,?,?,?)`
  );

  insert_product.run(
    "computer",
    "The computer further intelligent",
    20.3,
    "technology"
  );
  insert_product.finalize();
}
export { insert_users, insert_stores, insert_products };
