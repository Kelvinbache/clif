import { db } from "./sqlite.mjs";

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
      product_name,
      product_description,
      product_prince,
      product_type 
      FROM product`,
    controller
  );
}

export { select };
