import { db } from "../../sqlite.mjs";

// other tables

function controller(err, row) {
  if (err) {
    console.error(err);
  }

  console.log(row);
}

function all_select() {
  db.each(
    `SELECT * FROM product`, controller
  );
}

export { all_select };
