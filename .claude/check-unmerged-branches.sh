#!/usr/bin/env bash
# SessionStart hook: warn about branches with work not merged into main.
# Outputs JSON with additionalContext that Claude sees at session start.
# Silent (exits 0 with no output) when nothing to report.

BRANCHES=$(git branch --no-merged main 2>/dev/null | sed 's/^[ *+] //' | grep -v '^$')

if [ -n "$BRANCHES" ]; then
  jq -n --arg b "$BRANCHES" '{
    hookSpecificOutput: {
      hookEventName: "SessionStart",
      additionalContext: ("Branches com trabalho não mergeado em main:\n" + $b + "\n\nAo começar uma nova branch a partir de main, avisar a Alice sobre essas pendentes primeiro.")
    }
  }'
fi
