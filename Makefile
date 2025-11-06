.PHONY: all go-gen ts-gen dependencies go-dependencies ts-dependencies clean help

# Default target
.DEFAULT_GOAL := help

# Check if required tools are installed
check-go:
	@which go > /dev/null || (echo "Error: go is not installed" && exit 1)

check-npm:
	@which npm > /dev/null || (echo "Error: npm is not installed" && exit 1)

# Install Go dependencies
go-dependencies: check-go go.sum go.mod
	@echo "Installing Go dependencies..."
	@go mod download

# Generate Go code from OpenAPI spec (using oapi-codegen)
go-gen: go-dependencies
	@echo "Generating Go server code..."
	@go run github.com/oapi-codegen/oapi-codegen/v2/cmd/oapi-codegen -config cfg.yaml ./tester/v1/openapi.yaml
	@echo "Success: Go code generated: tester/v1/tester.go"

# Install Node dependencies
ts-dependencies: check-npm package.json
	@echo "Installing Node dependencies..."
	@npm install

# Generate TypeScript code from OpenAPI spec (using openapi-typescript-codegen)
ts-gen: ts-dependencies
	@echo "Generating TypeScript client code..."
	@npm run gen
	@echo "Success: TypeScript code generated:"
	@echo "   - tester/v1/tester.ts"
	@echo "   - tester/v1/index.ts"
	@echo "   - tester/v1/models/"
	@echo "   - tester/v1/services/"
	@echo "   - tester/v1/core/"

# Install all dependencies
dependencies: go-dependencies ts-dependencies
	@echo "Success: All dependencies installed"

# Generate all code (Go + TypeScript)
all: go-gen ts-gen
	@echo "Success: All code generated successfully"

# Clean generated files
clean:
	@echo "Cleaning generated files..."
	@rm -rf ./tester/v1/tester.go \
		./tester/v1/tester.ts \
		./tester/v1/index.ts \
		./tester/v1/models \
		./tester/v1/services \
		./tester/v1/core
	@echo "Success: Cleaned"

# Show help
help:
	@echo "Available targets:"
	@echo ""
	@echo "  make all              - Generate both Go and TypeScript code"
	@echo "  make go-gen           - Generate Go server code only"
	@echo "  make ts-gen           - Generate TypeScript client code only"
	@echo "  make dependencies     - Install all dependencies (Go + Node)"
	@echo "  make go-dependencies  - Install Go dependencies only"
	@echo "  make ts-dependencies  - Install Node dependencies only"
	@echo "  make clean            - Remove all generated files"
	@echo "  make help             - Show this help message"
	@echo ""
	@echo "Generators:"
	@echo "  Go:         oapi-codegen v2.5.0"
	@echo "  TypeScript: openapi-typescript-codegen v0.29.0"
	@echo ""
	@echo "For more information, see README.md"
