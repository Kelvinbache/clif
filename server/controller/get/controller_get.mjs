import { db } from "../../../db/sqlite.mjs";
import { join } from "path";

export function controller_get(req, res, next) {
  db.all("select * from user", (err, rows) => {
    if (err) {
      console.error(err);
    }
     res.render(join(process.cwd(), "server", "views", "index.ejs"), {
      data: rows,
      url: req.originalUrl,
    });
  });
}

// show now in the front page init
