---
name: dogfooding
description: '**WORKFLOW SKILL** — Perform critical dogfooding: test your app as a real user would, examining code, running quality checks, simulating gameplay, and providing honest feedback on usability and fun factor. USE FOR: evaluating app quality from user perspective; identifying UX issues; assessing engagement and replayability; giving constructive criticism on features. DO NOT USE FOR: automated testing only (use runTests); code reviews (use UI Review agent); performance profiling.'
---

# Dogfooding

## Overview
This skill guides a thorough, critical evaluation of your application from an end-user perspective. It combines code analysis, quality assurance runs, gameplay simulation, and honest feedback on user experience - particularly focusing on fun and engagement factors.

## Decision Flow

| Step | When to Use | Tools Involved |
|------|-------------|----------------|
| Code Analysis | Always - understand mechanics and features | read_file, semantic_search |
| Quality Checks | Always - ensure app is functional | runTests, run_in_terminal (lint/build) |
| Gameplay Simulation | For interactive apps - walk through user flows | read_file on components, manual simulation |
| Critical Feedback | Always - provide honest UX assessment | Analysis of findings |

## Process

### 1. Understand the App
- Read core logic files (hooks, utils, data)
- Examine component structure and UI flows
- Identify key features and user interactions

### 2. Run Quality Assurance
- Execute unit tests: `runTests` with mode="run"
- Run linting: `run_in_terminal` with "npm run lint"
- Build the app: `run_in_terminal` with "npm run build"
- Verify all pass without errors

### 3. Simulate User Experience
- Walk through start-to-finish user flows by reading components
- Identify pain points, confusing elements, or missing features
- Assess mobile/desktop compatibility
- Evaluate persistence and error handling

### 4. Provide Critical Feedback
- Rate fun factor on 1-10 scale
- Highlight positive aspects that work well
- Identify critical issues that reduce enjoyment
- Suggest specific improvements for better user engagement
- Consider replayability, social features, and polish

## Quality Criteria
- **Comprehensive**: Covers code, tests, build, and UX
- **Honest**: Doesn't sugarcoat issues
- **Actionable**: Provides specific suggestions
- **User-Focused**: Prioritizes real user experience over technical metrics

## Example Usage
```
/dogfooding Test the bingo app for fun factor
```

## Assets
- No bundled assets required
- Relies on existing project structure and tools