describe('Check for accessibility violations (After Fixes) - Accessible Uni', () => {
    const afterFixUrl   = 'https://www.washington.edu/accesscomputing/AU/after.html'
	beforeEach(() => {
		cy.visit(afterFixUrl);
		cy.injectAxe();
	});
	it('Check that site has no accessibility violations on page load after fixes applied', () => {
		//cy.checkA11y(null, { includedImpacts: ['critical'] });
		cy.checkAccessibility();
});
    
});



