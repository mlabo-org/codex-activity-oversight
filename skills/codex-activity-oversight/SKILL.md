---
name: codex-activity-oversight
description: Control CAO / CAOで / $codex-activity-oversight workflows, or agent-selected durable state for large refactors, dependency or decision tracking, interruption, and resume, through exact-thread .CAO state, Hooks, and app-server reconciliation. Native Codex owns execution topology.
---

# Codex Activity Oversight

This `SKILL.md` is the local execution contract for this skill when selected. Its trigger, workflow, tool, file, and output boundaries are binding only inside this skill's scope. It does not override system or developer instructions, explicit user requests, applicable `AGENTS.md` files, or more specific local contracts.

CAO means Codex Activity Oversight: an exact-thread durable state-control plane, not an orchestrator or subagent launcher.

## Activation

Activate when the current user explicitly selects this workflow through a leading `CAO` / `CAOで` request, `$codex-activity-oversight`, explicit bundled-skill selection, or an explicit continuation of an already active CAO workflow. Native Codex may also select CAO when it determines that durable state materially improves a large refactor, dependency or decision-heavy change, or an expected interruption and resume. Record a brief reason for that selection and honor an explicit user opt-out.

Do not activate for a short, self-contained coding request merely because CAO exists, and do not keep CAO active for unrelated work. Do not activate from plugin inspection, a generic subagent request, incidental `CAO` text, `.CAO` directory presence, or prior state alone.

## Responsibility boundary

- Native Codex owns task decomposition, official subagent use, model and reasoning selection, spawn or fork, recursive delegation, peer messaging, live supervision, result integration, and semantic acceptance.
- CAO owns exact root-thread binding, durable task facts, known work, decisions, progress, typed evidence, unresolved boundaries, finalization, and handoff.
- Official Hooks and app-server data are observations of native execution. CAO must not infer semantic completion from an agent stopping, a thread becoming idle, or a collaboration tool completing.
- Never encode a model roster, worker profile, hierarchy policy, delegation depth policy, or orchestration algorithm in CAO.

## Required workflow

1. Resolve the target workspace and read applicable instructions.
2. Inspect `.CAO/` first. If it is absent and `.coding-agents/` exists, preserve the legacy directory and let `intake` copy it non-destructively.
3. Run `intake` before material work. Bind the current root with `--root-thread-id "$CODEX_THREAD_ID"`; the CLI uses that environment value by default when available. For a mid-work adoption, first record the actual completed and uncompleted facts in the task input, then use `intake` to preserve them without treating an interruption as finalization.
4. Read `context`. Treat `.CAO/task.md`, `todo.md`, `decisions.md`, `work.md`, `audit.md`, `ledger.md`, and `runtime-events/` as durable task state.
5. Open each independently meaningful material responsibility with `begin-work` before production. This is a semantic state transaction, not a dispatch instruction.
6. Let native Codex choose and use the current execution capabilities. Do not wrap `spawn_agent`, prescribe a model, flatten descendants, or reconstruct peer coordination.
7. After the parent integrates a result, record exactly one terminal work result. Record decisions and progress as they become semantic facts. Record the admitted acceptance bundle with `verify --covers`, naming every active decision and completion ID that the passed verification actually supports.
8. Run `reconcile-runtime` before finalization when subagents or collaboration were used, or when Hook ancestry was unresolved. It must use the exact bound root and official app-server read APIs, emit a `runtime:<event-key>` receipt, expose incomplete lifecycle observations, and keep `semantic_completion_inferred: false`. Cite that receipt only when runtime behavior is inside the admitted verification scope.
9. Finalize only after known work is closed, runtime ancestry is resolved, and every active decision and completion ID maps to a passed verification record that explicitly covers it. Source/spec coverage must name existing authoritative files or paths. Typed-reference syntax alone is not acceptance evidence.
10. Run `doctor` after finalization, then hand off the completed receipt. A successful handoff says `status: completed` and does not instruct another finalization. Success ends verification.

## Hook contract

The plugin supplies `SessionStart`, `SubagentStart`, `SubagentStop`, and `Stop` command Hooks.

- Every Hook first finds the nearest `.CAO` and compares against the exact bound root thread tree.
- `SessionStart` injects current state only into the matching root.
- `SubagentStart` uses app-server ancestry before injecting state into a descendant.
- `SubagentStop` records the observed lifecycle event but cannot close semantic work.
- `Stop` blocks only a matching root with known unfinished `.CAO` state. A finalized task passes without another review.
- Mismatched sessions receive no state context and no control effect.
- Raw prompts and assistant messages are not copied into runtime events.

Plugin Hook activation is a runtime boundary. A source edit does not make the current installed task use new Hooks. After an authorized refresh, verify Hook review/trust and active status in Codex Settings before claiming activation.

## Stop conditions

Stop and preserve exact state before scope expansion, destructive work, unrelated user-change reversal, authentication, external send or publication, plugin refresh or activation, or any action not authorized by the current request.

If official Hook or app-server ancestry cannot establish that an event belongs to the bound root tree, record it as unresolved, inject no state, and require reconciliation before finalization.
