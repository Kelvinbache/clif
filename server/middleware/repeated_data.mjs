  import { db } from "../../db/sqlite.mjs";

export function repeat(req, res, next) {

  db.all(`SELECT name, email, phone from user `, (err, rows) => { // make a join between the store and the user
   
    let boolean;
    
    if (err) {
    
      return err;
    
    }

      const {name, email, phone} = req.body;

        boolean = rows.some((row) => row.name === name || row.email === email || row.phone === phone); // The other comparisons need to be made
        

      if (boolean) {
    
        res.status(400).json({ message: "the user already exists" });
        
      } else {

        next();

      }
    
    }

  );
}
