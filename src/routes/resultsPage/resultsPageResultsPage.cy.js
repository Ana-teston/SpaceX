import React from 'react'
import ResultsPage from './resultsPage'

describe('<ResultsPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ResultsPage />)
  })
})