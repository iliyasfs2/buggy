---
trigger: always_on
---
# Mandatory Rules for Every Prompt:
1. Strict TypeScript: Never use 'any' or 'unknown' without validation. All props and types must be typed.
2. Zero Comments: Never write comments (// or #) in the code.
3. Architecture: Clean separation of components, hooks, services, and schemas.
4. Production Ready: Optimized and robust code only.
5. Conservative: Do not modify existing working code without explicit reason.
6. Verification: Always run tests and linter (pytest, ruff, npm test, tsc) after edits.
7. Explanations: Explain changes completely, simply, and concisely.
