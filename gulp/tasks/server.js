import { path } from "../config/path.js";
import browserSync from "browser-sync";

function server () {
    browserSync.init({
        server: {
            baseDir: path.root,
        }
    });
};
export default server;