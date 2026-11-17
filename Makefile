##
# Makefile for care-appointment-success.
##

##
# make test-minimum-supported-rust-version: Check and test on the minimum supported Rust version (N-2) and the next (N-1).
##
.PHONY: test-minimum-supported-rust-version
test-minimum-supported-rust-version:
	./bin/make-test-minimum-supported-rust-version
