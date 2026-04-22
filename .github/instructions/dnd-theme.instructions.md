---
name: dnd-theme
description: Use this instruction set when making the D&D transformation for the Bingo app. Keeps architecture, design, and dependency guidance aligned with the fantasy theme.
applyTo:
  - src/**
  - public/**
  - package.json
---

# D&D Theme Instructions

Use these guidelines whenever major architecture, design, or dependency changes are made for the Dungeons & Dragons-themed version of the Bingo app.

## Architecture Guidance

- Preserve the existing game flow and logic in `src/hooks/useBingoGame.ts` and `src/utils/bingoLogic.ts` wherever possible.
- Theme changes should focus on presentation and content, not game rules. Core features like the 5×5 board, free center square, and bingo detection should remain intact unless a deliberate D&D-specific rule is introduced.
- Do not add a character creator. Keep the app focused on a single-game social bingo experience with D&D flavor.
- If new state or hooks are introduced, document them here and explain why they are necessary for the theme.

## Design Guidance

- Replace generic bingo copy with D&D-flavored text in `src/components/StartScreen.tsx`, `src/components/GameScreen.tsx`, and `src/components/BingoModal.tsx`.
- Use a cohesive fantasy palette and atmospheric styling in `src/index.css`, leveraging Tailwind CSS variables for colors and visual tokens.
- Update `src/data/questions.ts` with D&D-specific prompts only. The free space text should also match the theme (for example, `CRITICAL HIT` or `FREE ROLL`).
- Add sound effects for interactive moments: dice roll sound on square tap and victory fanfare on bingo completion. Keep these sounds lightweight and optional if the browser cannot play audio.
- Visual assets (icons, dice, magic motifs) should support the theme without introducing heavy dependencies.

## Dependency Guidance

- Prefer vanilla audio support and built-in browser APIs over large third-party sound libraries.
- If new assets or audio files are added, place them under `src/assets/` or `public/` and note them here.
- Only add dependencies to `package.json` when they solve a real problem for the D&D theme; avoid theme-related libraries that add unnecessary bundle size.

## Maintenance Notes

- Whenever a major design or architecture change is made for the D&D theme, update this file with the new reasoning, affected files, and any dependency decisions.
- Keep the instructions aligned with the current implementation, especially if new files or patterns are introduced for sounds, animations, or fantasy-specific UI.
- If the theme expands beyond visual and audio polish into new gameplay features, add a short section here explaining the new feature and how it interacts with the existing bingo flow.
