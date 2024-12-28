import { join } from "path";

export function form_user(req, res, next) {
  res.render(join(process.cwd(), "server", "views", "template" , "page", "login"));
}
