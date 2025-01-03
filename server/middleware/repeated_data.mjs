import { db } from "../../db/sqlite.mjs";

export function repeat(req, res, next) {

  db.all(`SELECT name, email, phone from user `, (err, rows) => { // make a join between the store and the user
   
    let boolean;
    
    if (err) {
    
      return err;
    
    }

      const data = Object.values(req.body);

    
      for ( const item in data ) {

        boolean = rows.some((row) => row.name === data[item] || row.email === data[item] || row.phone === data[item]);
        
      }


      if (boolean) {
    
        res.status(400).json({ message: "the user already exists" });
        
      } else {

        next();

      }
    
    }

  );
}
