import { join } from "path";

export function form_products(req, res, next) {
  res.render(join(process.cwd(), "server", "views", "template","page", "products"));
}
