describe('Homepage View', () => {
    beforeEach(() => {
        cy.intercept(
            "GET",
            "https://api.nytimes.com/svc/topstories/v2/food.json?api-key=LU6VCnan2YWTBZv4RkzC0faIiydCEDPL",
            {
                statusCode: 200,
                ok: true,
                fixture: 'mockArticles'
            }
        )
        cy.visit("http://localhost:3000")
    })
})