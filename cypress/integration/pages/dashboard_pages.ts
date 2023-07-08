export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack';
    btn_addToCartSLB = '[data-test="add-to-cart-sauce-labs-backpack"]';
    btn_removeSLB = '[data-test="remove-sauce-labs-backpack"]';
    cartBadge = '.shopping_cart_badge';
    sortItem = '[data-test="product_sort_container"]';
    inventoryName = '.inventory_item_name';
    inventoryPrice = '.inventory_item_price';


    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    addSauceLabsBackpack(){
        cy.get(this.btn_addToCartSLB).click();
        cy.get(this.cartBadge).should('have.text', '1');
    }
    removeSauceLabsBackpack(){
        cy.get(this.cartBadge).should('have.text', '1');
        cy.get(this.btn_removeSLB).click();
        cy.get(this.cartBadge).should('not.exist');
    }

    filterByAZ(){
        cy.get(this.sortItem).select('az');
        cy.get(this.inventoryName)
            .then(items => {
                const unsortedItems = items.map((index, html) => Cypress.$(html).text()).get();
                const sortedItems = unsortedItems.slice().sort();
                expect(unsortedItems).to.deep.equal(sortedItems);
        });
    }
    filterByZA(){
        cy.get(this.sortItem).select('za');
        cy.get(this.inventoryName)
            .then(items => {
                const unsortedItems = items.map((index, html) => Cypress.$(html).text()).get();
                const sortedItems = unsortedItems.slice().sort().reverse();
                expect(unsortedItems).to.deep.equal(sortedItems);
        });
    }
    filterByLowHigh(){
        cy.get(this.sortItem).select('lohi');
        cy.get(this.inventoryPrice)
            .then(items => {
                const unsortedItems = items.map((index, html) => Cypress.$(html).text()).get();
                const sortedItems = unsortedItems.slice().sort(function(a, b){return parseFloat(a)-parseFloat(b)});
                expect(unsortedItems).to.deep.equal(sortedItems);
            });
    }
    filterByHighLow(){
        cy.get(this.sortItem).select('hilo');
        cy.get(this.inventoryPrice)
            .then(items => {
                const unsortedItems = items.map((index, html) => Cypress.$(html).text()).get();
                const sortedItems = unsortedItems.slice().sort(function(a, b){return parseFloat(b)-parseFloat(a)});
                expect(unsortedItems).to.deep.equal(sortedItems);
            });
    }



}