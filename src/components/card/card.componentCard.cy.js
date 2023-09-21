import React from 'react'
import Card from './card.component'

describe('<Card />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Card />)
  })
})