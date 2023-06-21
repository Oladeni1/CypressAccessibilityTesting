# Installations:

For Cypress v10 and above

npm install --save-dev cypress

npm install --save-dev cypress-axe axe-core


# Configurations:

Replace your site with the existing baseUrl within the cypress.config.js


# Run cypress accessibility test(s):

Option 1

run > 'npx cypress open' within the terminal of your project 
Then execute your test from the test runner.

Option 2

run > 'npx cypress run --spec cypress/e2e/*.cy.js' within the integrated terminal of your project


# Checking the violations log:

RightClick on the violations shown on the cypress test runner and open DevTool.