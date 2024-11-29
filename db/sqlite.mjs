import sqlite3 from "sqlite3";
import { cwd } from "process";
import { join } from "path";

//controllers of tha base data
import { create_table } from "./controllers/controller_crete_table.mjs";
import {insert_users,insert_stores,insert_products} from "./controllers/controller_insert_table.mjs";
import { select } from "./controllers/controller_select_table.mjs";

//drive the errors db
import { drive_db } from "./controllers/errors/drive_db.mjs";


function controller_init() {  create_table(); select();}

//address of the base data
const address = join(cwd(), "db", "schema.db");

const db = new sqlite3.Database(address,sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,drive_db);

db.serialize(controller_init);

export { db };
