import { db } from "../sqlite.mjs";

// other tables

function controller(err, row) {
  if (err) {
    console.error(err);
  }

  console.log(row);
}

function select() {
  db.each(
    `SELECT  
    *
      FROM product,user,store`,
    controller
  );
}

export { select };
