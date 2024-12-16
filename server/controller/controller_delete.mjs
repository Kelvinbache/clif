import { db } from "../../db/sqlite.mjs";
import { drive_db } from "../../db/driver/drive_db.mjs"; //! change the drive error for each method

export function controller_delete(req, res, next) {
  const { name } = req.body;
  db.run(`Delete from product where product_name = "${name}" `, drive_db); //!--> show error in delete, code status 
  res.json ("delete product exit");
}
