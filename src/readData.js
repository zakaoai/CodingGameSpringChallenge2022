import debugConst from "./constant/debug";
import { globalConst } from "./constant/global";
import { log } from "./utils/log";
import { resetPerf } from "./utils/perf";

const { POSSIBLE_MOVES } = debugConst;

function readGameData() {
  const entityCount = parseInt(readline()); // Amount of heros and monsters you can see
  globalConst.oldEntitys[globalConst.turn] = globalConst.entitys;
  globalConst.entitys = [];
  globalConst.monsters = [];
  globalConst.me.heroes = [];
  globalConst.op.heroes = [];
  for (let i = 0; i < entityCount; i++) {
    var inputs = readline().split(" ");
    const id = parseInt(inputs[0]); // Unique identifier
    const type = parseInt(inputs[1]); // 0=monster, 1=your hero, 2=opponent hero
    const x = parseInt(inputs[2]); // Position of this entity
    const y = parseInt(inputs[3]);
    const shieldLife = parseInt(inputs[4]); // Ignore for this league; Count down until shield spell fades
    const isControlled = parseInt(inputs[5]); // Ignore for this league; Equals 1 when this entity is under a control spell
    const health = parseInt(inputs[6]); // Remaining health of this monster
    const vx = parseInt(inputs[7]); // Trajectory of this monster
    const vy = parseInt(inputs[8]);
    const nearBase = parseInt(inputs[9]); // 0=monster with no target yet, 1=monster targeting a base
    const threatFor = parseInt(inputs[10]); // Given this monster's trajectory, is it a threat to 1=your base, 2=your opponent's base, 0=neither

    const entity = {
      id,
      type,
      x,
      y,
      shieldLife,
      isControlled,
      health,
      vx,
      vy,
      nearBase,
      threatFor
    };
    globalConst.entitys.push(entity);
    if (type === 0) {
      globalConst.monsters.push(entity);
    }
    if (type === 1) {
      globalConst.me.heroes.push(entity);
    }
    if (type === 2) {
      globalConst.op.heroes.push(entity);
    }
  }
}

function readMe() {
  var inputs = readline().split(" ");
  const health = parseInt(inputs[0]); // Your base health
  const mana = parseInt(inputs[1]); // Ignore in the first league; Spend ten mana to cast a spell
  globalConst.me.health = health;
  globalConst.me.mana = mana;
}

function readOp() {
  var inputs = readline().split(" ");
  const health = parseInt(inputs[0]); // Your base health
  const mana = parseInt(inputs[1]); // Ignore in the first league; Spend ten mana to cast a spell
  globalConst.op.health = health;
  globalConst.op.mana = mana;
}

function readPossibleMoves() {}

export default function readDatas() {
  readMe();
  readOp();
  readGameData();
  readPossibleMoves();
}
