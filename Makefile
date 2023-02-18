# Run CI locally
ci:
	@echo "Running GH Action"
	act -p=false
ci_dryrun:
	@echo "Running GH Action (dryrun)"
	act -n