const { performance } = require("perf_hooks");

let beginTime = performance.now();
const BreakException = {};
const TIMEOUT_TIME_TURN_ZERO = 900;
const TIMEOUT_TIME = 45;

export function resetTimeout() {
  beginTime = performance.now();
}

export function isTimeout(message) {
  const endTime = performance.now();
  const isTimeout = endTime - beginTime > (turn === 0 ? TIMEOUT_TIME_TURN_ZERO : TIMEOUT_TIME);
  log(isTimeout, "Timeout, time since last reset %s - %s", endTime - beginTime, message);
  return isTimeout;
}

export function doThrowIfTimeout(message = "") {
  if (isTimeout(`DO THROW ${message}`)) {
    throw BreakException;
  }
}
