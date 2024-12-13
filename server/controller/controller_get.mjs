import { db } from "../../db/sqlite.mjs";

export function controller_get(req, res, next) {
  db.all("select * from user", (err, rows) => {
    if (err) {
      console.error(err);
    }
    res.json(rows);
  });
}
