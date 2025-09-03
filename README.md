# Cypress TypeScript Project

A complete Cypress testing project with TypeScript support, custom commands, and best practices.

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Open Cypress Test Runner:
```bash
npm run cypress:open
```

3. Run tests in headless mode:
```bash
npm run cypress:run
```

## 📁 Project Structure

```
cypress-typescript/
├── cypress/
│   ├── e2e/                    # Test files
│   │   ├── sample.cy.ts       # Sample test suite
│   │   └── login.cy.ts        # Login functionality tests
│   ├── fixtures/              # Test data
│   │   └── example.json       # Sample fixture data
│   └── support/               # Support files
│       ├── commands.ts        # Custom commands
│       └── e2e.ts            # Global configuration
├── cypress.config.ts          # Cypress configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run cypress:open` | Open Cypress Test Runner |
| `npm run cypress:run` | Run tests in headless mode |
| `npm run cypress:run:chrome` | Run tests in Chrome browser |
| `npm run cypress:run:firefox` | Run tests in Firefox browser |
| `npm run test` | Alias for `cypress:run` |
| `npm run test:headed` | Run tests with browser UI |

## 🧪 Writing Tests

### Basic Test Structure

```typescript
/// <reference types="cypress" />

describe('My Test Suite', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should do something', () => {
    cy.get('[data-cy=element]').should('be.visible')
  })
})
```

### Custom Commands

This project includes several custom commands:

- `cy.dataCy('value')` - Select elements by data-cy attribute
- `cy.login(email, password)` - Login with credentials
- `cy.clearAppState()` - Clear cookies, localStorage, and sessionStorage

### Using Fixtures

```typescript
cy.fixture('example').then((data) => {
  expect(data.name).to.equal('Using fixtures to represent data')
})
```

## ⚙️ Configuration

### Cypress Configuration (`cypress.config.ts`)

- Base URL: `http://localhost:3000`
- Viewport: 1280x720
- Video recording: Enabled
- Screenshots on failure: Enabled
- Default timeouts: 10 seconds

### TypeScript Configuration (`tsconfig.json`)

- Target: ES5
- Strict mode: Enabled
- Includes Cypress types
- Module resolution: Node

## 🎯 Best Practices

### 1. Use Data Attributes
```typescript
// Good
cy.get('[data-cy=submit-button]').click()

// Avoid
cy.get('.btn-primary').click()
```

### 2. Page Object Model
Consider creating page objects for complex applications:

```typescript
class LoginPage {
  visit() {
    cy.visit('/login')
  }

  fillEmail(email: string) {
    cy.get('[data-cy=email]').type(email)
  }

  fillPassword(password: string) {
    cy.get('[data-cy=password]').type(password)
  }

  submit() {
    cy.get('[data-cy=login-button]').click()
  }
}
```

### 3. API Testing
```typescript
cy.request('GET', '/api/users').then((response) => {
  expect(response.status).to.equal(200)
  expect(response.body).to.have.length.greaterThan(0)
})
```

### 4. Environment Variables
Create a `.env` file for environment-specific configurations:

```bash
CYPRESS_BASE_URL=http://localhost:3000
CYPRESS_API_URL=http://localhost:3001
```

## 🔧 Troubleshooting

### Common Issues

1. **TypeScript errors**: Ensure all dependencies are installed and `tsconfig.json` is properly configured.

2. **Tests not running**: Check that your base URL is correct in `cypress.config.ts`.

3. **Element not found**: Use `cy.get()` with proper selectors and add appropriate waits.

### Debug Mode

Run tests with debug information:
```bash
DEBUG=cypress:* npm run cypress:run
```

## 📚 Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [TypeScript with Cypress](https://docs.cypress.io/guides/tooling/typescript-support)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Write tests for your changes
4. Ensure all tests pass
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.
