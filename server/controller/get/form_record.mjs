import {join} from 'path'

export function form_record(req,res,next) {
    res.render(join(process.cwd(), "server", "views", "template", "page", "record"));
}