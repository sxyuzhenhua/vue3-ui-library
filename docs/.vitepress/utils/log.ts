import process from "process";

export function errorAndExit(err: Error): never {
  console.error(err);
  process.exit(1);
}
