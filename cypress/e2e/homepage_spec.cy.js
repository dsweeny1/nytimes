const key = '2g0IGFodDXgFfkdSuJ6VAqTUWjPEm2J0'

describe('Homepage View', () => {
    beforeEach(() => {
        cy.intercept(
            "GET",
            `https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${key}`,
            {
                statusCode: 200,
                ok: true,
                fixture: "mockArticles"
            }
        )
        cy.visit("http://localhost:3000")
    })
    it('Should be able to visit the home page and render the header', () => {
        cy.get('.nyt-logo')
        cy.get('.header-title').contains('New York Times Reader')
      })
      it('Should be able to render the buttons and search input', () => {
        cy.get('[data-testid="lightswitch-image"]')
        cy.get('.saved-articles')
        cy.get('.reset-button')
        cy.get('input')
        cy.get('.search-button')
      })
      it('Should be able to visit the home page and render the article cards', () => {
        cy.get('.articles > :nth-child(1)')
        cy.get(`.article-image`)
        cy.get('.article-title').contains('Inside the ‘Top Chef’ Industrial Complex')
        cy.get(':nth-child(1) > button > img')
      })
      it('Should be able to render the footer', () => {
        cy.get('.name-tag').contains('Danielle Sweeny')
        cy.get('[alt="LinkedIn logo"]')
        cy.get('[alt="GitHub logo"]')
      })
})

describe('Homepage action', () => {
    beforeEach(() => {
        cy.intercept(
            "GET",
            `https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${key}`,
            {
                statusCode: 200,
                ok: true,
                fixture: "mockArticles"
            }
        )
        cy.visit("http://localhost:3000")
    })

    it('should be able to toggle the theme', () => {
        cy.get('.App-light')
        cy.get('[data-testid="lightswitch-image"]').first().click()
        cy.get('.App-dark')
        cy.get('[data-testid="lightswitch-image"]').first().click()
        cy.get('.App-light')
    })
    it('Should be able to add/delete to Saved Articles, view Saved Articles list and return home', () => {
        cy.get('.articles > :nth-child(1) > button').first().click()
        cy.get('.saved-articles').first().click()
        cy.url().should("eq", "http://localhost:3000/saved-articles")
        cy.get('.nyt-logo').first().click()
        cy.url().should("eq", "http://localhost:3000/")
        cy.get('.articles > :nth-child(1) > button').first().click()
        cy.get('.saved-articles').first().click()
        cy.url().should("eq", "http://localhost:3000/saved-articles")
        cy.get('h2').contains('No Articles Saved Right Now!')
        cy.get('.nyt-logo').first().click()
    })
    it('Should be able to search for articles', () => {
        cy.get("input").type("ramen").get(".search-button").click()
        cy.get('.article-title').contains('Restaurant Review: At Okiboru, Soupless Ramen in a Stressless Setting')
    })
    it('Should be able to view article details', () => {
        cy.get('.articles > :nth-child(1)').first().click()
        cy.get('[data-testid="article-multimedia"]')
        cy.get('[data-testid="article-title"]').contains('Inside the ‘Top Chef’ Industrial Complex')
        cy.get('[data-testid="article-abstract"]').contains('Entering its 20th season, the sprawling Bravo franchise has changed the way Americans eat and become a mirror of the restaurant industry.')
        cy.get('[data-testid="article-byline"]').contains('By Brett Anderson')
        cy.get('[data-testid="article-section"]').contains('Section: dining')
        cy.get('[data-testid="article-link"]').invoke("removeAttr", "target").click()
        cy.origin('https://www.nytimes.com', () => {
            cy.get('body').contains('The New York Times')
        })
    })
})