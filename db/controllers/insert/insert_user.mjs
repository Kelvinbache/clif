import { db } from "../../sqlite.mjs";
import { drive_db } from "../errors/drive_db.mjs";

export function insert_user() {
  const insert_user = db.prepare(
    `INSERT INTO user (name,last_name,email,phone) VALUES(?,?,?,?)`
  );

  insert_user.run("manuel", "abache", "manuel_abache@gmail.com", "0412789556");
  insert_user.finalize(drive_db);
}
