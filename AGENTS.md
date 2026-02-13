# Leveraging Subagents & Parallel Agents in Cursor Pro

This project is configured for Cursor's subagents and parallel agent (worktree) features.

## Built-in subagents (automatic)
- **Explore** — Codebase search
- **Bash** — Scripts, npm, diagnostics
- **Browser** — Testing via MCP

## Project subagents (.cursor/agents/)
- **Content Slayer** — Blog posts, about page, sales copy
- **Integration Checker** — Kit, purchase links
- **Frontend Polish** — UI, a11y, responsive

Ask the main Agent to delegate: e.g. "have Content Slayer draft a blog post about 1099 tax deadlines"

## Parallel agents (worktrees)
Run multiple agents in parallel, each in its own worktree. Use Best-of-N to run the same prompt across 2+ models and pick the best. .cursor/worktrees.json copies .env.local so agents can test Kit.

## Docs
- https://cursor.com/docs/context/subagents
- https://cursor.com/docs/configuration/worktrees
