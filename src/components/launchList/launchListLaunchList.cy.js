import React from 'react'
import LaunchList from './launchList'

describe('<LaunchList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LaunchList />)
  })
})