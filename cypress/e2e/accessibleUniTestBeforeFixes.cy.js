describe('Check accessibility violations (Before Fixes) - Accessible Uni', () => {
	const beforeFixUrl  =  'https://www.washington.edu/accesscomputing/AU/before.html'
	beforeEach(() => {
		cy.visit(beforeFixUrl); 
		cy.injectAxe();
	});
	it('Check that site has no accessibility violations on page load before fixes', () => {
		//cy.checkA11y(null, { includedImpacts: ['critical'] });
		cy.checkAccessibility();
});
    
});



