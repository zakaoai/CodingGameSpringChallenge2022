import { resetPerf, logPerf } from "./utils/perf";
import { resetTimeout } from "./utils/timeout";
import { play } from "./game";
import { log } from "./utils/log";
import { globalConst } from "./constant/global";
import initGame from "./initGame";
import readDatas from "./readData";
import computeDatas from "./computeDatas";

initGame();
resetPerf();
computeDatas();
logPerf();
// The Game Loop
while (true) {
  readDatas();

  resetTimeout();

  try {
    play();
    logPerf();
  } catch (error) {
    log(true, "ERROR", error);
  }
  globalConst.turn++;
}
