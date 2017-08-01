export default class LogUtil {
    static i(tag, hint) {
        console.log(tag + "==> " + new Date().valueOf() + " " + hint)
    }
}
