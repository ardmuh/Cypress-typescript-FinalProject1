import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com/'

beforeEach(() => {
    loginPage.login(URL,'standard_user','secret_sauce')
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    dashboardPage.sauceLabsBackpack() 
})

it('Test add item to cart',()=>{
    dashboardPage.addSauceLabsBackpack();
})
it('Test remove item from cart',()=>{
    dashboardPage.addSauceLabsBackpack();
    dashboardPage.removeSauceLabsBackpack();
})
it('Test sort item by filter',()=>{
    dashboardPage.filterByAZ(); // filtered by name A to Z
    cy.wait(1000)
    dashboardPage.filterByZA(); // filtered by name Z to A
    cy.wait(1000)
    dashboardPage.filterByLowHigh(); // filtered by price Low to High
    cy.wait(1000)
    dashboardPage.filterByHighLow(); // filtered by price High to Low
})