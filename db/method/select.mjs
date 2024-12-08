import { db } from "../sqlite.mjs";
import { select_data } from "../controllers/select_data.mjs";

export function select() {
  db.all("SELECT * from user LIMIT 10", select_data); 
}


