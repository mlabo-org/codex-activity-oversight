import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";
import path from "node:path";

const script = path.resolve("scripts/migrate-legacy-coding-agents-state.mjs");

test("default skill root follows the canonical .agents/skills source", () => {
  const help = execFileSync(process.execPath, [script, "--help"], { encoding: "utf8" });

  assert.match(help, /skill source canonical location: .*\.agents[\\/]skills/);
  assert.doesNotMatch(help, /skill source canonical location: .*\.codex[\\/]skills/);
});
