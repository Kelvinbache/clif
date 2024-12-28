import { db } from "../../../db/sqlite.mjs";
import { drive_db } from "../../../db/driver/drive_db.mjs";

//!---> There are several updaters

export function controller_update_user(req, res, next) {
  
    const { name, id } = req.body;
  db.run(`update user set name = "${name}" where user_id =${id}`, drive_db);
  
  res.json(" HE update successfully");
}
