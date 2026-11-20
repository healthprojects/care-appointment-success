##
# Makefile for care-appointment-success.
##

##
# make ci-minimum-supported-rust-version: Check and test on the minimum supported Rust version (N-2) and the next (N-1).
##
.PHONY: ci-minimum-supported-rust-version
ci-minimum-supported-rust-version:
	./bin/make-ci-minimum-supported-rust-version

##
# make test-benchmarks: Run the criterion benchmarks, if any.
##
.PHONY: test-benchmarks
test-benchmarks:
	./bin/test-benchmarks

##
# make test-coverage: Measure test coverage with cargo-tarpaulin.
##
.PHONY: test-coverage
test-coverage:
	./bin/test-coverage
