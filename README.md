# Contracts Generation

OpenAPI specifications and code generation for TypeScript client and Go server.

## Quick Start

### Using Make (recommended)

```bash
# Generate all code
make all

# Or use specific targets
make ts-gen          # TypeScript client only
make go-gen          # Go server only
make dependencies    # Install all dependencies
make clean          # Remove generated files
```

### Using npm

```bash
npm install          # Install dependencies
npm run gen          # Generate TypeScript client only
```

## Structure

```
contracts/
├── cfg.yaml                    # oapi-codegen config for Go
├── package.json                # npm scripts and dependencies
└── tester/v1/
    ├── openapi.yaml           # OpenAPI 3.0 specification (source of truth)
    ├── tester.go              # Generated Go server (Fiber)
    ├── tester.ts              # Generated TypeScript client class
    ├── index.ts               # Main TypeScript exports
    ├── models/                # TypeScript type definitions (34 files)
    ├── services/              # TypeScript API service methods
    └── core/                  # TypeScript core utilities (HTTP client, etc.)
```

## Generators

### Go Server

- Tool: [oapi-codegen](https://github.com/oapi-codegen/oapi-codegen) v2.5.0
- Output: Fiber server interfaces and models
- Config: `cfg.yaml`

### TypeScript Client

- Tool: [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) v0.29.0
- Output: Fetch-based client with TypeScript types
- Compatible with Next.js API routes

## Usage

### TypeScript Client

```typescript
import { tester } from "../../contracts/tester/v1/tester";

// Create client
const client = new tester({
  BASE: "http://localhost:13000",
  CREDENTIALS: "include",
  HEADERS: {
    "X-User-ID": userId,
  },
});

// Make API calls
const problems = await client.default.listProblems({ page: 1, pageSize: 10 });
```

### With Types

```typescript
import type { Problem, GetProblemResponse } from "../../contracts/tester/v1";

const response: GetProblemResponse = await client.default.getProblem({
  id: problemId,
});
```

### Go Server

```go
import testerv1 "github.com/Vyacheslav1557/contracts/tester/v1"

// Implement ServerInterface
type Handlers struct {
    // your dependencies
}

func (h *Handlers) UpdateProblem(c *fiber.Ctx, id openapi_types.UUID) error {
    var req testerv1.UpdateProblemRequest
    if err := c.BodyParser(&req); err != nil {
        return err
    }
    // your logic
    return c.SendStatus(fiber.StatusOK)
}

// Register handlers
testerv1.RegisterHandlers(app, handlers)
```

## Development Workflow

1. Edit `tester/v1/openapi.yaml`
2. Run `make all` to regenerate code
3. Update imports in your application
4. Test changes

## Configuration

### TypeScript Generator
- `--client fetch` - Native Fetch API
- `--useOptions` - Options object for parameters
- `--name tester` - Base class name

### Go Generator (cfg.yaml)
```yaml
package: testerv1
generate:
  fiber-server: true
  models: true
output: ./tester/v1/tester.go
```