# Bingo Mixer Workspace Instructions

This repository is a React + Vite + Tailwind CSS project for a social bingo game. The workspace is set up for fast frontend development, with a focused set of project conventions and reusable agent instructions.

## Quick Start

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run test`

## Key Concepts

- `src/` contains the application source.
- `src/App.tsx` is the main app entry point.
- `src/components/` holds UI components like `BingoBoard`, `BingoSquare`, `GameScreen`, and `StartScreen`.
- `src/hooks/useBingoGame.ts` contains game state logic.
- `src/utils/bingoLogic.ts` contains the bingo rule engine and has existing tests in `src/utils/bingoLogic.test.ts`.
- Tailwind CSS v4 is used via `@tailwindcss/vite` and `src/index.css`.

## Project Conventions

- Keep UI state in `src/hooks/useBingoGame.ts` and separate pure logic into `src/utils/`.
- Prefer component-driven styling and Tailwind utility classes.
- Use the provided `.github/instructions/` guidance for frontend design and Tailwind v4.
- Follow existing component structure and reuse the current screen/modal flow.

## Agent and Prompt Resources

- `.github/prompts/setup.prompt.md` — workspace setup prompt.
- `.github/instructions/frontend-design.instructions.md` — frontend design guidance for creative React UI work.
- `.github/instructions/tailwind-4.instructions.md` — Tailwind v4 development best practices.
- `.github/agents/` contains higher-level agent workflows such as TDD support, quiz master guidance, and UI review.

## When to Use This Workspace Instructions File

Use this file for general workspace onboarding, build/test commands, and project-specific guidance. For task-specific behavior, prefer the more focused files in `.github/instructions/` and `.github/agents/`.

## Useful Notes

- The app is designed as a workshop/lab project; keep changes simple and aligned with the current interactive bingo experience.
- The repository already includes a `.devcontainer/` for development container usage.
- If you need to update or extend agent behavior, add new files under `.github/agents/`, `.github/instructions/`, or `.github/prompts/` rather than modifying this bootstrap file.
