import debugConst from "./constant/debug";
import { globalConst } from "./constant/global";
import { log } from "./utils/log";
import { resetPerf } from "./utils/perf";

const { POSSIBLE_MOVES } = debugConst;

function readGameData() {}

function readMe() {}

function readOp() {}

function readPossibleMoves() {}

export default function readDatas() {
  readGameData();
  readMe();
  readOp();
  readPossibleMoves();
}
