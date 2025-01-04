import { db } from "../sqlite.mjs";
import { execute } from "../driver/drive_table.mjs"

//!start this from the beginning

async function create_table() {
  const table = {

    tables_user: `
     
     CREATE TABLE IF NOT EXISTS user (
     user_id INTEGER PRIMARY KEY AUTOINCREMENT,
     name TEXT NOT NULL,
     last_name TEXT NOT NULL,
     email VARCHAR(50) NOT NULL,
     phone INTEGER NOT NULL   
  );

 `,
  
 token : `
     CREATE TABLE IF NOT EXISTS Token(
     token_id INTEGER PRIMARY KEY AUTOINCREMENT,
     token TEXT NOT NULL 
  );
 `
 , 
    tables_store: `
     CREATE TABLE IF NOT EXISTS store (
     store_id INTEGER PRIMARY KEY AUTOINCREMENT,
     store_name TEXT NOT NULL,
     address TEXT NOT NULL,
     state_store TEXT NOT NULL
  );
`,

    tables_products: `
     CREATE TABLE IF NOT EXISTS product (
     product_id INTEGER PRIMARY KEY AUTOINCREMENT,
     product_name TEXT NOT NULL,
     product_description TEXT NOT NULL,
     product_prince REAL NOT NULL CHECK (product_prince >= 0),
     product_type INTEGER NOT NULL
 );

 `,

//     tables_img: `

//  CREATE TABLE IF NOT EXISTS img (
//      img_id INTEGER PRIMARY KEY AUTOINCREMENT,
//      img_img BLOB NOT NULL,
//      img_data VARCHAR(225) NOT NULL
//  );

// `


  };

  try {
   
    await execute(db, table);

  } catch (err) {

    return `message:${err}`;

  } finally {

    db.close();

  }

}

export { create_table };
