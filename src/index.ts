import {generateUID} from "./uid";
import {UIDReset, UIDConsumer, UIDFork} from "./Control";
import {useUID, useUIDSeed} from "./hooks";
import {UID} from "./UIDComponent";

const uid = generateUID();

export {
  generateUID,
  uid,

  UID,
  UIDConsumer,
  UIDReset,
  UIDFork,

  useUID,
  useUIDSeed
}