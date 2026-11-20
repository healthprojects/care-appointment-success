# Contributing to Care Appointment Success

Thanks for helping improve this project.

## Ways to contribute

- **Report a problem:** open an issue describing what is wrong, unclear, or missing.
- **Fix or improve something:** open a pull request. Small fixes can go straight to a pull request; for larger changes, please open an issue first so we can agree on the approach.
- **Add content or examples:** follow the structure and style of the existing files.

## Layout and checks

Read [AGENTS.md](AGENTS.md) and [spec/index.md](spec/index.md) first; the spec is the source of truth. Do not edit `spec/official-publications/`.

- `locales/en-gb/submission/` and `locales/cy-gb/submission/`: the English and Welsh answers. Keep word limits, numbers and acronyms consistent.
- `care-appointment-success.github.io/` and `care-appointment-success-ui/`: SvelteKit prototypes. Run `pnpm install && pnpm run check && pnpm run check:locales && pnpm run build` in each folder you change.
- `care-appointment-service/`: Rust (Loco) API. Run `cargo check && cargo test && cargo fmt --all -- --check && cargo clippy`.
- `make ci-minimum-supported-rust-version`: check the minimum supported Rust version.

## Code of conduct

Participation is governed by our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contribution is offered under the terms in [LICENSE.md](LICENSE.md).
