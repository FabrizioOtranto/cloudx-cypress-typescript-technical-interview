# Cypress TypeScript Technical Test - QA Automation Senior

## Objective

The purpose of this technical test is to evaluate the candidate's ability to design and implement a Cypress automated test using TypeScript, following best practices for senior-level test automation. The candidate should demonstrate knowledge in Cypress with TypeScript, test architecture and reusability, good coding practices, and use of advanced Cypress features (commands, fixtures, environment variables, configuration, and Page Object Model).

## Test Scenarios

### Scenario 1: Add Product to Shopping Cart

**Test Case:** Should allow the user to add a product to the shopping cart

**Description:** Implement a test that validates the complete user flow of adding a product to the shopping cart, including user authentication and navigation to the online shop.

**Mandatory Requirements:**
1. **Use Page Object Model** - Create classes to encapsulate elements and methods for product page only
2. **Use Fixtures** - Utilize JSON files for test data (users, products, etc.)

**Test Flow:**
- Navigate to the application: `https://pushing-it.vercel.app/`
- Perform user authentication (double-click register toggle, enter credentials)
- Navigate to the online shop section
- Validate successful navigation to the shop

**Expected Skills Demonstrated:**
- Page Object Model implementation
- Fixture usage for test data management
- Element interaction and navigation
- Test data organization

---

### Scenario 2: Verify Products in Shopping Cart

**Test Case:** Should allow the user to verify products on the shopping cart

**Description:** Implement a test that validates the shopping cart functionality by adding a specific product and verifying it appears in the cart.

**Test Flow:**
- Navigate to the application and authenticate user
- Navigate to the online shop
- Select a specific product ("Buzo Negro")
- Close the product modal
- Navigate to the shopping cart
- Verify the product is present in the cart

**Expected Skills Demonstrated:**
- Modal handling and interaction
- Shopping cart validation
- Product selection and verification
- End-to-end user journey testing

---

### Scenario 3: Create Product via API

**Test Case:** Should allow the user to create a product on the API

**Description:** Implement API testing capabilities to create products through API endpoints, demonstrating knowledge of Cypress API testing features.

**Mandatory Requirements:**
1. **Unique ID Generation** - The product ID should be unique for each test execution
2. **Multiple Implementation Options** - Implement two different approaches for creating a product on the API while ensuring ID uniqueness

**Expected Skills Demonstrated:**
- Cypress API testing (`cy.request()`)
- Dynamic data generation
- Unique identifier strategies
- API response validation
- Test data management for API tests

**Implementation Options to Consider:**
- Using timestamps for unique IDs
- Using UUID generation
- Using random number generation
- Using Cypress environment variables
- Using fixtures with dynamic data

---

## Technical Requirements

### Framework and Language
- **Cypress** with **TypeScript**
- Follow TypeScript best practices and type safety

### Architecture Requirements
- **Page Object Model** implementation (mandatory for Scenario 1)
- **Fixtures** for test data management
- **Custom Commands** (recommended)
- **Environment Variables** usage (recommended)
- **Configuration** management

### Code Quality Standards
- Clean, maintainable, and reusable code
- Proper error handling
- Meaningful test descriptions and comments
- Following Cypress best practices
- TypeScript type definitions

### Project Structure
The candidate should organize the project following Cypress conventions:
```
cypress/
├── e2e/
│   └── onlineShop/
│       └── technicalInterview.cy.ts
├── fixtures/
│   └── [test data files]
├── support/
│   ├── commands.ts
│   └── e2e.ts
└── pages/
    └── [Page Object Model classes]
```
**URL:** `https://pushing-it.vercel.app/`

**Test Credentials:**
- Username: `pushingit`
- Password: `123456!`

**Key Elements:**
- Register toggle: `[data-cy="registertoggle"]`
- Username field: `[data-cy="user"]`
- Password field: `[data-cy="pass"]`
- Submit button: `[data-cy="submitForm"]`
- Online shop link: `[data-cy="onlineshoplink"]`
- Product "Buzo Negro": `[name="Buzo Negro"]`
- Close modal: `[data-cy="closeModal"]`
- Shopping cart: `[data-cy="goShoppingCart"]`

---

*This technical test is designed to assess the candidate's proficiency in Cypress automation with TypeScript at a senior level, focusing on practical implementation skills and best practices.*