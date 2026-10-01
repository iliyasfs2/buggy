---
trigger: always_on
---
# SYSTEM ARCHITECTURE SPECIFICATION & MANDATORY RULES: BuggyOS

## 1. CORE ARCHITECTURAL LAWS

1. **Local-First & Client-Side Execution:**
   - User code evaluation (interactive lessons and Bug Vault challenges) MUST execute exclusively on the client (browser-side via Web Workers or isolated sandboxes).
   - NEVER send user code to the backend for execution. The backend is strictly a state, commerce, and identity engine.
2. **Stateless API Design:**
   - The backend runs on FastAPI with stateless JWT authentication (Bearer tokens in Auth headers).
   - Session states are banned in backend memory; state resides in client storage (`localStorage`/`IndexedDB`) and PostgreSQL.
3. **Optimistic UI with Backend Reconciliation:**
   - Frontend state updates instantly via client-side stores (e.g., Zustand).
   - Background sync pushes state mutations to FastAPI. Errors rollback optimistic updates.
4. **Data Integrity & Atomic Balances:**
   - All virtual currency ("Byte") operations must execute inside strict PostgreSQL database transactions with row-level locking (`SELECT ... FOR UPDATE`) to prevent race conditions and double-spending.

---

## 2. BACKEND SPECIFICATION (FastAPI + PostgreSQL)

### 2.1 Technology Stack
- **Framework:** FastAPI (Python 3.11+)
- **ORM / Query Builder:** SQLAlchemy 2.0 (Async) + Alembic
- **Validation:** Pydantic V2
- **Database:** PostgreSQL (utilizing JSONB for dynamic setups)

### 2.2 Relational Data Models (Database Schema)
1. **`users` Table:**
   - `id`: UUID (Primary Key)
   - `email`: VARCHAR(255), unique, indexed
   - `username`: VARCHAR(50), unique, indexed
   - `hashed_password`: VARCHAR(255)
   - `is_pro`: BOOLEAN, default FALSE
   - `pro_expires_at`: TIMESTAMP WITH TIME ZONE, nullable
   - `created_at`: TIMESTAMP WITH TIME ZONE, default NOW()

2. **`dioramas` Table (Setup State):**
   - `user_id`: UUID (Foreign Key -> users.id, unique, indexed)
   - `config`: JSONB (Strict schema validated via Pydantic)
   - `updated_at`: TIMESTAMP WITH TIME ZONE

3. **`wallets` Table:**
   - `user_id`: UUID (Foreign Key -> users.id, unique, indexed)
   - `byte_balance`: INTEGER, default 0, CHECK (`byte_balance` >= 0)
   - `updated_at`: TIMESTAMP WITH TIME ZONE

4. **`transactions` Table:**
   - `id`: UUID (Primary Key)
   - `user_id`: UUID (Foreign Key -> users.id, indexed)
   - `amount`: INTEGER (Positive for purchases, negative for spends)
   - `category`: ENUM ('PACK_PURCHASE', 'STREAK_FREEZE', 'ITEM_BUY', 'REWARD')
   - `reference_id`: VARCHAR(100), nullable
   - `created_at`: TIMESTAMP WITH TIME ZONE, default NOW()

5. **`streaks` Table:**
   - `user_id`: UUID (Foreign Key -> users.id, unique, indexed)
   - `current_streak`: INTEGER, default 0
   - `longest_streak`: INTEGER, default 0
   - `last_active_date`: DATE
   - `activity_history`: JSONB (Array of ISO Date strings for GitHub-style heatmap)
   - `freeze_count`: INTEGER, default 0

### 2.3 Pydantic Schemas (Data Contracts)
- `AvatarConfig`: gender_base, hair_style, hair_color, eyes, glasses, headphones, outfit
- `DeskConfig`: laptop_case_color, stickers, mug, keyboard_rgb, accessory
- `RoomConfig`: wall_paint, poster, shelf_item, lighting
- `DioramaState`: avatar (AvatarConfig), desk (DeskConfig), room (RoomConfig)

---

## 3. NON-NEGOTIABLE DEVELOPMENT RULES

1. **Strict TypeScript (Zero `any`):**
   - Strict mode is mandatory. Never use `any` or `unknown` without explicit runtime validation.
   - All props, API payloads, state objects, and return values must have explicit interfaces/types.

2. **Zero Code Comments:**
   - ABSOLUTELY NO COMMENTS allowed in the codebase (no `//`, `/* */`, or `#`).
   - Code must be 100% self-documenting through clean naming, modular structure, and strong typing.

3. **Modular Component Architecture:**
   - Strict separation of concerns: UI components, custom hooks, API services, and schemas must live in separate, dedicated files.
   - Single Responsibility Principle for all components and functions.

4. **Production Ready & Optimized:**
   - Code must be production-ready at all times: proper error handling, HTTP status codes, performance optimizations, and clean async patterns.

5. **Conservative Editing (No Arbitrary Changes):**
   - Never refactor or alter existing working code without explicit instruction or direct architectural necessity.

6. **Self-Verification Loop (Automated Testing & Linting):**
   - After every single code modification, the agent MUST run:
     - Backend: `pytest` and `ruff check .`
     - Frontend: `npx tsc --noEmit`, `npm run lint`, and `npm test`
   - If any test, type-check, or lint error occurs, the agent must fix it autonomously before reporting completion.

7. **Clear & Concise Explanations:**
   - Always explain all changes and new code completely, simply, and concisely in the chat.
