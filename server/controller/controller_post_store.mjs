import { db } from "../../db/sqlite.mjs";
import { drive_db } from "../../db/driver/drive_db.mjs";

export function controller_store(req, res, next) {
  
  const {name,address,state} = req.body;
  const store = db.prepare(`INSERT INTO store (store_name,address,state_store) VALUES(?,?,?)`, drive_db);
  store.run([name,address,state]); 

  res.json("send");

}


