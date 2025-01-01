import { db } from "../sqlite.mjs";

export function repeat(data) {
 
    let boolean 

db.all(`SELECT name from user `, (err, rows) => {

    if (err) return err;

    boolean = rows.some((row) => row.name === data);
    console.log(boolean)

});

  return boolean;
}
