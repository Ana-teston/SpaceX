// Import the fixture data
import spaceXData from '../fixtures/spaceX.json';

describe('fetchSpaceXLaunches', () => {
  it('fetches SpaceX launches successfully', () => {
    // Use cy.fixture to load the fixture data
    cy.fixture('spaceX.json').as('spaceXData');

    // Use cy.intercept to mock the API request and respond with the fixture data
    // Log requests and responses
    cy.intercept('GET', 'https://api.spacexdata.com/v5/launches').as('getSpaceXLaunches');


    // Visit your application or perform any actions that trigger the API request
    //cy.visit('../../src/api/spaceX.js');

    //cy.wait('@getSpaceXLaunches');

    // Debugging
    cy.get('@spaceXData').then((data) => {
      console.log('Received SpaceX data:', data);
    });

    // Now, you can use the fixture data for your assertions
    cy.get('@spaceXData').should('be.an', 'array').and('have.length.greaterThan', 0);

  });
});
