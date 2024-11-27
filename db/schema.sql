DROP TABLE IF EXISTS user
DROP TABLE if NOT EXISTS user 

CREATE TABLE user (
    user_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone INTEGER NOT NULL
)

CREATE TABLE store(
    store_id INTEGER PRIMARY KEY,
    store_name TEXT NOT NULL,
    address TEXT NOT NULL,
    state_store TEXT NOT NULL,
)

CREATE TABLE product (
    product_id INTEGER PRIMARY KEY,
    product_name TEXT NOT NULL,
    product_description TEXT NOT NULL,
    product_prince INTEGER NOT NULL,
    product_type INTEGER NOT NULL
)

CREATE TABLE img {
    img_id INTEGER PRIMARY KEY,
    img_img BLOB NOT NULL,
    img_data VARCHAR(225) NOT NULL,
}


INSERT INTO user (name,last_name,email,phone) VALUES();

SELECT * FROM user JOIN ;