describe('Check accessibility violations', () => {
	beforeEach(() => {
		cy.visit('/'); 
		cy.injectAxe();
	});
	it('Check that site has no accessibility violations on page load', () => {
		//cy.checkA11y(null, { includedImpacts: ['critical'] });
		cy.checkAccessibility();
});
    
});



