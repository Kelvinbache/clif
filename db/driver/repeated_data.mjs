import { db } from "../sqlite.mjs";

export function repeat(data) {
 
    let boolean // deberia quitar esto de aqui

db.all(`SELECT name from user `, (err, rows) => {

    if (err) return err;

    boolean = rows.some((row) => row.name === data); // si me da el valor 
    console.log(boolean)

});

  return boolean; // pero cuando llega aqui de vuelve indefinido 
}
