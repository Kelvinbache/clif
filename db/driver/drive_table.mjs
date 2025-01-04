function errs(err) {
  if (err) {
    console.error(err);
  }
}

const execute = async function (db, sql) {
  for (const value of Object.values(sql)) {
    db.exec(value, errs);

    if (!value) {
      db.run(`
     
     DROP TABLE IF EXISTS user;
     DROP TABLE IF EXISTS store;
     DROP TABLE IF EXISTS product;
     DROP TABLE IF EXISTS Token;

     ALTER TABLE user ADD password TEXT;

  `);
    }
  }
};

export { execute };
