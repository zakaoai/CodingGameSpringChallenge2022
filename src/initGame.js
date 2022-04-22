import debugConst from "./constant/debug";
import { globalConst } from "./constant/global";
import { log } from "./utils/log";

export default function init() {
  var inputs = readline().split(" ");
  const baseX = parseInt(inputs[0]); // The corner of the map representing your base
  const baseY = parseInt(inputs[1]);
  const heroesPerPlayer = parseInt(readline()); // Always 3
  globalConst.me.base = { x: baseX, y: baseY };
  globalConst.heroesPerPlayer = heroesPerPlayer;
}
