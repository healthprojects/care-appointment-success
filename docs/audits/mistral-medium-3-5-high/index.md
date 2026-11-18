# Quality Improvement Tasks for Care Appointment Success

Based on analysis of this open-source, bilingual healthcare innovation project, here are **actionable improvement tasks** organized by your requested categories.

---

## 🎯 **For New Visitors, Promotion & Upskilling**

### **Onboarding & Documentation (Priority: HIGH)**

| Task | Description | Effort | Impact |
|------|-------------|--------|--------|
| **Create Interactive Project Tour** | Build a guided walkthrough (e.g., using [Intro.js](https://introjs.com/) or [Driver.js](https://driverjs.com/)) for the GitHub Pages prototype that explains the 5-part concept to new visitors | Medium | High |
| **Add "Good First Issue" Labels** | Tag beginner-friendly tasks in GitHub: documentation fixes, locale key additions, CSS tweaks, test writing | Low | Medium |
| **Write Getting Started Guide** | Create `GETTING_STARTED.md` with: project architecture diagram, local dev setup (all 3 components), contribution workflow | Medium | High |
| **Create Architecture Decision Records (ADRs)** | Document key decisions: why SvelteKit + Loco, why Lily Design System, bilingual-by-design approach, fictional data policy | Medium | High |
| **Build a Contribution Ladder** | Document paths: docs → tests → frontend → backend → research, with estimated time for each | Low | Medium |
| **Add Screenshots to READMEs** | Capture and add annotated screenshots of all prototype flows (appointment → barrier check → navigator) to both web folder READMEs | Low | Medium |

### **Promotion & Community Building**

| Task | Description | Effort | Impact |
|------|-------------|--------|--------|
| **Create Project Website** | Standalone landing page at `care-appointment-success.github.io` (not just the prototype) explaining the bid, timeline, and how to contribute | Medium | High |
| **Write Blog Post Series** | "Building a Bilingual Healthcare App" covering: i18n patterns, accessibility in Svelte, Lily Design System integration | Medium | High |
| **Setup Social Media Presence** | Twitter/X and Mastodon accounts with project updates, progress toward submission deadline | Low | Medium |
| **Create Hacktoberfest Issues** | Curate 12+ issues tagged `hacktoberfest` covering docs, tests, and non-critical features | Low | Medium |
| **Build a Demo Video Script** | Write script for D2 video that can be reused for promotion (3-min limit, covers concept + innovation) | Medium | High |
| **Add Project to Open Source Directories** | Register on: [Open Source Healthcare](https://github.com/opensourcehealthcare), [ Awesome Healthcare](https://github.com/kartikmohana/awesome-healthcare), [Welsh Tech](https://github.com/techiaith/techiaith) | Low | Medium |

### **Upskilling & Learning Resources**

| Task | Description | Effort | Impact |
|------|-------------|--------|--------|
| **Create Learning Paths** | Document: "Learn SvelteKit with this project", "Learn Rust with Loco", "Healthcare UX Design" | Medium | High |
| **Add Code Commentary** | Annotated walkthroughs: `src/lib/auth.svelte.ts` (OIDC), `src/controllers/` (Loco), locale system | Medium | High |
| **Write Testing Tutorial** | "How we test accessibility" with Playwright + axe-core examples from the verified tests | Medium | High |
| **Create Welsh Language Guide** | Document patterns for Welsh i18n: mutation handling, plural rules, date formatting | Medium | High |
| **Build a Research Primer** | Summarize key findings from `spec/` into "What We Know About Missed Appointments" for new contributors | Medium | Medium |
| **Add API Documentation** | Generate OpenAPI spec for the Rust service and document endpoints | Medium | Medium |

---

## ⚙️ **For Engineering, Coding, Testing & Auditing**

### **Frontend (SvelteKit) Improvements**

| Task | Description | Effort | Impact |
|------|-------------|--------|--------|
| **Fix GitHub Pages Deployment** | Publish `care-appointment-success.github.io` as standalone repo and enable the workflow | Low | **Critical** |
| **Upgrade TypeScript to 7** | Monitor SvelteKit compatibility and upgrade when stable (currently breaks build) | Low | Medium |
| **Add Storybook** | Component library for reusable UI elements (barrier cards, appointment display, navigator form) | Medium | High |
| **Implement Real Search** | Replace client-side search with Algolia DocSearch or similar for better UX | Medium | Medium |
| **Add Dark Mode Toggle** | Extend picker-bar to include dark/light theme switching | Low | Medium |
| **Create Mobile-First CSS Audit** | Verify all pages at 320px width, fix any horizontal scrolling | Low | Medium |
| **Add Loading States** | Skeleton screens for page transitions in the prototype | Low | Medium |
| **Implement Error Boundaries** | Add error handling for route loading failures | Low | Medium |
| **Add Form Validation** | Client-side validation for barrier check and rebook flows | Medium | Medium |
| **Create Accessibility Test Suite** | Expand Playwright tests to cover keyboard navigation, focus traps, ARIA | Medium | High |
| **Add Performance Budgets** | Set Lighthouse CI thresholds for Pages deployment | Low | Medium |
| **Implement Route Analytics** | Add client-side tracking of prototype usage (anonymous, no PII) | Medium | Medium |

### **Backend (Rust/Loco) Improvements**

| Task | Description | Effort | Impact |
|------|-------------|--------|--------|
| **Add Appointment Model** | Create SeaORM model for appointments with all required fields from WPAS | Medium | High |
| **Implement Risk Scoring** | Add endpoint that calculates equity-safe risk scores ( Phase 1 deliverable) | High | High |
| **Create API Health Checks** | `/health` endpoint with database and Keycloak connectivity checks | Low | High |
| **Add Rate Limiting** | Implement token bucket rate limiting for public endpoints | Medium | Medium |
| **Setup Database Migrations CI** | Verify migrations in CI against Postgres | Low | High |
| **Add OpenAPI Documentation** | Generate Swagger UI from code annotations | Medium | Medium |
| **Implement Audit Logging** | Log all mutating operations with timestamp, user, action | Medium | High |
| **Add Soft Deletes** | Implement for users and appointments | Low | Medium |
| **Create Seed Data** | Add fictional appointment data generator for local dev | Low | Medium |
| **Implement CORS Safely** | Configure CORS for the prototype UI origins | Low | Medium |
| **Add Request ID Tracking** | Generate UUID for each request, include in logs and responses | Low | Medium |

### **Testing Improvements**

| Task | Description | Effort | Impact |
|------|-------------|--------|--------|
| **Add End-to-End Tests** | Playwright tests covering full flows: appointment → barrier check → navigator request | Medium | High |
| **Create Property-Based Tests** | Use `fast-check` for Rust service: validate risk scoring, date calculations | Medium | High |
| **Add Mutation Testing** | Setup [cargo-mutants](https://github.com/sourcefrog/cargo-mutants) for critical service code | Medium | Medium |
| **Expand Accessibility Tests** | Add WCAG 2.2 AAA checks to existing axe-core tests | Low | Medium |
| **Create Load Tests** | k6 or similar for the Rust service under simulated traffic | Medium | Medium |
| **Add Visual Regression Tests** | Percy or Chromatic for prototype UI consistency | Medium | Medium |
| **Implement Contract Tests** | Verify frontend-backend API contracts with Pact | Medium | Medium |
| **Add Fuzz Testing** | Use cargo-fuzz for appointment parsing, input validation | Medium | Low |
| **Create Test Coverage Reports** | Setup coverage for both Svelte and Rust with thresholds | Low | Medium |
| **Add Integration Tests** | Test full stack: UI → service → database → Keycloak | High | High |

### **Security & Auditing**

| Task | Description | Effort | Impact |
|------|-------------|--------|--------|
| **Run Security Audit** | `cargo audit` and `npm audit` on all dependencies | Low | **Critical** |
| **Add Security Policy** | Create `SECURITY.md` with vulnerability reporting process | Low | High |
| **Implement CSRF Protection** | For any state-changing operations in the prototypes | Medium | High |
| **Add Security Headers** | CSP, HSTS, X-Frame-Options for GitHub Pages | Low | High |
| **Create Threat Model** | Document for the full system: data flow, trust boundaries, attack surfaces | Medium | High |
| **Add Dependabot** | Automated dependency updates for npm and Cargo | Low | High |
| **Implement Token Rotation** | For Keycloak access tokens in the service | Medium | Medium |
| **Add Input Sanitization** | Validate all user inputs in both frontend and backend | Medium | High |
| **Create Security Test Suite** | OWASP ZAP or similar automated security scanning | Medium | High |
| **Add Secrets Scanning** | GitLeaks or TruffleHog in CI to prevent credential commits | Low | High |
| **Implement JWKS Cache Validation** | Ensure Keycloak JWKS cache in `oidc.rs` has proper TTL and refresh | Medium | Medium |

### **Code Quality & Tooling**

| Task | Description | Effort | Impact |
|------|-------------|--------|--------|
| **Setup Pre-commit Hooks** | Husky for pnpm (Svelte), cargo hooks for Rust (fmt, clippy) | Low | High |
| **Add Linting for Markdown** | `markdownlint` for all `.md` files in repo | Low | Medium |
| **Create Code Style Guide** | Document conventions: Rust (rustfmt), TypeScript (ESLint), CSS | Low | Medium |
| **Add Spell Checking** | `cspell` or `misspell` for docs and code comments | Low | Medium |
| **Setup Code Coverage CI** | For both frontend and backend with minimum thresholds | Medium | High |
| **Add Code Duplication Detection** | `jscpd` for Svelte/TS, `cargo-dupe` for Rust | Low | Medium |
| **Implement Dependency Graph** | Visualize dependencies between components | Low | Medium |
| **Add Performance Profiling** | Flamegraph generation for Rust service | Low | Medium |
| **Create Code Review Checklist** | For PRs: tests pass, locales checked, accessibility verified | Low | Medium |

### **i18n & Localization Improvements**

| Task | Description | Effort | Impact |
|------|-------------|--------|--------|
| **Add Missing Locale Keys** | Scan `.svelte` files for hardcoded strings not in `messages.json` | Low | High |
| **Create Locale Validation Script** | Ensure all locales have identical keys and proper Welsh translations | Low | High |
| **Add Welsh Language Linter** | Check for common Welsh translation errors (mutations, gender) | Medium | Medium |
| **Create Translation Memory** | Extract all English strings for professional Welsh translation | Medium | High |
| **Add RTL Language Support** | Test prototype with Arabic or other RTL languages | Low | Medium |
| **Implement Pluralization Rules** | Proper Welsh plural forms (singular, plural, dual where needed) | Medium | Medium |
| **Create Locale Coverage Report** | Track which strings are translated vs. need translation | Low | Medium |

---

## 📊 **Quick Start Task List for AI**

Here are **immediately actionable tasks** an AI can tackle:

### Week 1: Foundational Improvements
1. **Create `GETTING_STARTED.md`** with architecture overview and dev setup
2. **Add screenshots** to both web prototype READMEs
3. **Setup pre-commit hooks** (Husky for pnpm, cargo hooks)
4. **Run `cargo audit` and `npm audit`** and document findings
5. **Create SECURITY.md** with vulnerability reporting process
6. **Add `markdownlint`** configuration and fix existing issues
7. **Scan for hardcoded strings** in Svelte files and extract to locales

### Week 2: Testing & Quality
1. **Expand Playwright tests** to cover all prototype flows
2. **Setup code coverage** for both frontend and backend
3. **Add end-to-end tests** for the full appointment → barrier → navigator flow
4. **Create property-based tests** for the Rust service
5. **Implement visual regression tests** for prototype UI
6. **Add security headers** to GitHub Pages configuration
7. **Setup Dependabot** for automated dependency updates

### Week 3: Documentation & Promotion
1. **Create architecture decision records** (ADRs) for key choices
2. **Write learning paths** for SvelteKit and Rust/Loco
3. **Build demo video script** for D2 submission
4. **Create "Good First Issue" labels** and curate beginner tasks
5. **Add code commentary** for key files (auth, controllers, models)
6. **Write testing tutorial** for accessibility testing
7. **Create contribution ladder** with effort estimates

### Week 4: Engineering Depth
1. **Add appointment model** to Rust service
2. **Implement risk scoring endpoint** with equity-safe logic
3. **Create threat model** document for the full system
4. **Setup mutation testing** for critical service code
5. **Add OpenAPI documentation** to Rust service
6. **Implement health checks** for service and database
7. **Create test coverage reports** with thresholds

---

## 🎯 **Prioritization Matrix**

| Category | High Impact / Low Effort | High Impact / Medium Effort | High Impact / High Effort |
|----------|-------------------------|----------------------------|--------------------------|
| **Critical** | Security audit, GitHub Pages deploy, SECURITY.md | Testing expansion, locale validation, pre-commit hooks | E2E tests, threat model, risk scoring |
| **Quality** | Markdown linting, screenshots, hardcoded string scan | Code coverage, ADRs, learning paths | Property-based tests, visual regression |
| **Growth** | Good first issues, contribution ladder | GETTING_STARTED.md, video script | Interactive tour, standalone website |

---

## 📝 **Next Steps**

1. **Start with Week 1 tasks** - These provide immediate value and establish foundations
2. **Focus on security and testing** - Critical for a healthcare-related project
3. **Document everything** - Helps onboard new contributors and maintain quality
4. **Automate checks** - Prevent regressions and ensure consistent quality

Would you like me to elaborate on any specific task category or create detailed implementation instructions for particular tasks?
