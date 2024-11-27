import { db } from "./sqlite.mjs";

// Change the shape of create tables ( use execute )
function create_table() {
  const tables_user = db.run(`
  
      CREATE TABLE IF NOT EXISTS user (
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone INTEGER NOT NULL
    );
  
    `);

  const tables_store = db.run(
    `
    CREATE TABLE IF NOT EXISTS store (
        store_id INTEGER PRIMARY KEY AUTOINCREMENT,
        store_name TEXT NOT NULL,
        address TEXT NOT NULL,
        state_store TEXT NOT NULL
     );
    `
  );

  const tables_products = db.run(`
        CREATE TABLE IF NOT EXISTS product (
        product_id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_name TEXT NOT NULL,
        product_description TEXT NOT NULL,
        product_prince REAL NOT NULL,
        product_type INTEGER NOT NULL
    );
  
    `);

  const tables_img = db.run(`
  
    CREATE TABLE IF NOT EXISTS img (
        img_id INTEGER PRIMARY KEY AUTOINCREMENT,
        img_img BLOB NOT NULL,
        img_data VARCHAR(225) NOT NULL
    );
  
    `);

  if (!tables_user || !tables_store || !tables_products || !tables_img) {
    db.run(
      `
          DROP TABLE IF EXISTS user;
          DROP TABLE IF EXISTS store;
          DROP TABLE IF EXISTS product;
          DROP TABLE IF EXISTS img;
          `
    );
  }
}

export { create_table };
