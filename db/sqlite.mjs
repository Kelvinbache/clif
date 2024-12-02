import sqlite3 from "sqlite3";
import { cwd } from "process";
import { join } from "path";

//controllers of tha base data
import { create_table } from "./controllers/controller_crete_table.mjs";

//controller of select
import { all_select } from "./controllers/select/controller_select.mjs"; 

// functions for insert data
import { insert_products } from "./controllers/insert/insert_products.mjs";
import { insert_stores } from "./controllers/insert/insert_store.mjs";
import { insert_user } from "./controllers/insert/insert_user.mjs";

//drive the errors db
import { drive_db } from "./controllers/errors/drive_db.mjs";

// function of init 
function controller_init() {
  create_table();
  insert_products();
  all_select();
}

//address of the base data
const address = join(cwd(), "db", "schema.db");

const db = new sqlite3.Database(
  address,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  drive_db
);

db.serialize(controller_init);

export { db };
