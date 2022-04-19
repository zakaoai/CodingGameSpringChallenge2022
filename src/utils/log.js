import debugConst from "../constant/debug";

const { DEBUG_MODE } = debugConst;

export function log(show, message, ...obj) {
  if (DEBUG_MODE && show) {
    console.error(message, ...obj);
  }
}
