import { log } from "./utils/log";
import debugConst from "./constant/debug";
import { globalConst } from "./constant/global";
import { logPerf } from "./utils/perf";

import actions from "./constant/actions";

export function play() {
  for (let i = 0; i < globalConst.heroesPerPlayer; i++) {
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

    // In the first league: MOVE <x> <y> | WAIT; In later leagues: | SPELL <spellParams>;
    console.log("WAIT");
  }
}
