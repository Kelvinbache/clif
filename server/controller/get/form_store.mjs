import { join } from "path";

export function form_store(req, res, next) {
  res.render(join(process.cwd(), "server", "views", "template", "page", "store"));
}
