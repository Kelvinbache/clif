import sqlite3 from "sqlite3";
import { cwd } from "process";
import { join } from "path";

//drive the errors db
import { drive_db } from "./driver/drive_db.mjs";

//address of the base data
const address = join(cwd(), "db", "schema.db");

const db = new sqlite3.Database(
  address,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  drive_db
);


export { db };
