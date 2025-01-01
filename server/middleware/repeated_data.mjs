import { db } from "../../db/sqlite.mjs";

export function repeat(req, res, next) {
  const url = req.originalUrl;

  db.all(`SELECT name, email, phone from user `, (err, rows) => {
   
    let boolean;
    
    if (err) {
    
      return err;
    
    }

    if (url === "/user") {
    
      const { name, lastName, email, phone } = req.body;

      boolean = rows.some((row) => row.name === name || row.email === email || row.phone === phone);

      if (boolean) {
    
        res.status(400).json({ message: "the user already exists" });
    
      } else {

        next();

      }
    
    }

  });
}
