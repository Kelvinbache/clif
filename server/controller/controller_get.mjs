import { select } from "../../db/method/select.mjs"; // !Error in the import 

export function controller_get(req, res, next) {
  select();
  res.json("hello word");
}
