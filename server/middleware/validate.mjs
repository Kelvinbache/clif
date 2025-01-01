function Validate(url, data) {

  if (url === "/user") {
    const { name, lastName, email, phone } = data;

    if (typeof name !== "string") {
      return "fill in the name field";
    } else if (name === " " || name === "") {
      return "fill in the field of name";
    }

    if (typeof lastName !== "string") {
      return "fill in the lastName field";
    } else if (lastName === " " || lastName === "") {
      return "fill in the field of lastName";
    }

    if (typeof email !== "string") {
      return "fill in the email field";
    } else if (email === " " || email === "") {
      return "fill in the field of email";
    }

    if (typeof phone !== "number") {
      return "fill in the phone field";
    }
  }

  // validate the data of my-store

  if (url === "/user/my-store") {
    const { name, address, state } = data;

    if (typeof name !== "string") {
      return "fill in the store name field";
    } else if (name === " " || name === "") {
      return "fill in the field of store name ";
    }

    if (typeof address !== "string") {
      return "fill in the address field";
    } else if (address === " " || address === "") {
      return "fill in the field of address";
    }

    if (typeof state !== "string") {
      return "fill in the state field";
    } else if (state === " " || state === "") {
      return "fill in the field of state";
    }
  }

  // validate the data of products

  if (url === "/user/my-store/product/new-product") {
    const { name, description, prince, type } = data;

    if (typeof name !== "string") {
      return "fill in the name field";
    } else if (name === " " || name === "") {
      return "fill in the field of name";
    }

    if (typeof description !== "string") {
      return "fill in the lastName field";
    } else if (description === " " || description === "") {
      return "fill in the field of lastName";
    }

    if (typeof type !== "string") {
      return "fill in the email field";
    } else if (type === " " || type === "") {
      return "fill in the field of email";
    }

    if (typeof prince !== "float") {
      return "fill in the prince field";
    } else if (prince < 0) {
      return "the price cannot be less than zero";
    }
  }
}

export function call_validate_data(req, res, next) {

  const response =  Validate(req.originalUrl, req.body);

  if (response) {

    res.status(400).json({ message: response }); //?----> This must be answered at the time of registration
 
  } else {

    next();

  }

}

// modify in the version 1.1.2
