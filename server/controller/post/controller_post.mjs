import { db } from "../../../db/sqlite.mjs";
import { drive_db } from "../../../db/driver/drive_db.mjs";
import { repeat } from "../../../db/driver/repeated_data.mjs";

export function controller_post(req, res, next) {
  const { name, lastName, email, phone } = req.body;
  const exists_data = repeat(name);

  console.log(exists_data)

if (exists_data){

  res.status(400).json({message:exists_data})
  next();

} else {

  // const new_user = db.prepare( `INSERT INTO user (name,last_name,email,phone) VALUES(?,?,?,?)`, drive_db);
  // new_user.run([name, lastName, email, phone]);
  res.json("send");

}

}
