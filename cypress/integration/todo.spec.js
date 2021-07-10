/// <reference types="cypress" />
/**
 *
 * @type -> End To End test
 * @description -> check XHR request and respones , page load and user view after add a task and remove it
 * @tools -> Cypress
 * @approach -> automate page loading and user's interactions with app
 */

describe('example to-do app', () => {
  beforeEach(() => {
    // cooment in this code and intercept request with mocked json fixture
    // cy.intercept('GET', 'http://localhost:9001/tasks?limit=10', {
    //   fixture: 'tasks.json',
    // })
  })

  it('verify correct request and response', () => {
    cy.intercept('GET', 'http://localhost:9001/tasks*').as('tasks')
    cy.wait(1000) // give some time to intercept gets configure before xhr
    cy.visit('http://localhost:8080/')
    cy.wait('@tasks').its('response.statusCode').should('eq', 200)
  })

  it('displays five todo items by default', () => {
    cy.visit('http://localhost:8080') // intercepting call using fixture json to provide mock data (comment it out to get real data from server)
    cy.get('*[class^="Item__TodoItem"]').should('have.length', 5)
  })

  it('can add new todo items', () => {
    // We'll store our item text in a variable so we can reuse it
    const newItem = 'my random task'

    cy.get('*[class^="Input__TodoInput"]').type(`${newItem}{enter}`) // type inside input and then hit enter
    cy.get('*[class^="Item__TodoItem"]') // make sure that task list in them DOM has increased and new task has the same text as is entered
      .should('have.length', 6)
      .last()
      .contains(newItem)
  })

  it('on click of the task after a while task flag changes to done and gets ommited from the DOM', () => {
    cy.get('*[class^="Item__TodoItem"]')
      .first()
      .click()
      .wait(3000)
      .should('have.length', 0)
  })
})
