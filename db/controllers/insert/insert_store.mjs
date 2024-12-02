import { db } from "../../sqlite.mjs";
import { drive_db } from "../errors/drive_db.mjs";

export function insert_stores() {
  const insert_store = db.prepare(
    `INSERT INTO store (store_name,address,state_store) VALUES(?,?,?)`
  );

  insert_store.run("production_js", "19 av entre call 1 and 2", "zulia");
  insert_store.finalize(drive_db);
}
