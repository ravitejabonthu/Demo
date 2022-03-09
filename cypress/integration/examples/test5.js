/// <reference types="cypress" />
describe('My fifth test suite', function () {
                  it('My first test case', function () {
                                    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
                                    cy.contains('Top').click({ force: true })
                                    cy.url().should('include', 'top')
                  })
})