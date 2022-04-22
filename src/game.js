import { log } from "./utils/log";
import debugConst from "./constant/debug";
import { globalConst } from "./constant/global";
import { logPerf } from "./utils/perf";

import actions from "./constant/actions";
import { compareManhattanDist } from "./utils/math";

const sortedByManhattanDist = entity => (a, b) => compareManhattanDist(entity, a.pos, b.pos);

function moveOrWait(target) {
  if (target) {
    console.log(`${actions.MOVE} ${target.pos.x} ${target.pos.y} ${target.id}`);
  } else {
    console.log(actions.WAIT);
  }
}

function calc() {
  const monsterNearBase = globalConst.monsters
    .sort(sortedByManhattanDist(globalConst.me.base))
    .filter(m => m.threatFor === 1);

  const monsterNearHero0 = globalConst.monsters.sort(sortedByManhattanDist(globalConst.me.heroes[0].pos));
  moveOrWait(monsterNearBase[0]);
  const monsterNearHero1 = globalConst.monsters.sort(sortedByManhattanDist(globalConst.me.heroes[1].pos));
  moveOrWait(monsterNearBase[1]);
  const monsterNearHero2 = globalConst.monsters.sort(sortedByManhattanDist(globalConst.me.heroes[2].pos));
  moveOrWait(monsterNearBase[2]);
}

function wait() {
  for (let i = 0; i < globalConst.heroesPerPlayer; i++) {
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

    // In the first league: MOVE <x> <y> | WAIT; In later leagues: | SPELL <spellParams>;
    console.log("WAIT");
  }
}

export function play() {
  calc();
}
