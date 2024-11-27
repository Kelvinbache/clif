import sqlite3 from "sqlite3";
import { cwd } from "process";
import { join } from "path";
import { create_table } from "./controller_crete_table.mjs";
import { insert_table } from "./controller_insert_table.mjs";
import { select } from "./controller_select_table.mjs";


function controller_db(err) {
  if (!err) {
    console.log("base data exist");
  }

  console.error(err);
}

function controller_init() {
  // create_table();
  // insert_table();
  select();
}

const address = join(cwd(), "db", "schema.db");
const db = new sqlite3.Database(
  address,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  controller_db
);

db.serialize(controller_init);

export { db };
