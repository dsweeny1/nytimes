import { rest } from "msw";

export const handlers = [
    rest.get('https://api.nytimes.com/svc/topstories/v2/home', async (req, res, ctx) => {
        return await res(
            ctx.json([
                {
                    title: "Federal Reserve's Path Is Murkier After Bank Blowup",
                    url: "https://www.nytimes.com/2023/03/13/business/economy/federal-reserve-interest-rates.html",
                    abstract: "The Federal Reserve has been rapidly raising interest rates to fight inflation. But making big moves could be trickier amid instability.",
                    byline: "By Jeanna Smialek",
                    published_date: "2023-03-13T05:00:32-04:00",
                    section: "world",
                    multimedia: [
                        {url: "https://static01.nyt.com/images/2023/03/13/multimedia/13dc-fed-pfjh/13dc-fed-pfjh-superJumbo.jpg"},
                        {url: "https://static01.nyt.com/images/2023/03/13/multimedia/13dc-fed-pfjh/13dc-fed-pfjh-threeByTwoSmallAt2X.jpg"}
                    ]
                },
                {
                    title: 
                    "‘Russia Outside Russia’: For Elite, Dubai Becomes a Wartime Harbor",
                    url:"https://www.nytimes.com/2023/03/13/world/europe/russia-dubai-ukraine-war.html",
                    abstract: "In the exclusive neighborhoods and palatial shopping malls of the United Arab Emirates’ biggest city, wealthy Russians can build a new life without having to cut ties to their home country.",
                    byline: "By Anton Troianovski and Andrea DiCenzo",
                    published_date: "2023-03-13T05:00:32-04:00",
                    section: "world",
                    multimedia: [
                        {url: "https://static01.nyt.com/images/2023/03/09/multimedia/00russia-dubai-promo/00russia-dubai-11-ltbq-superJumbo.jpg"},
                        {url: "https://static01.nyt.com/images/2023/03/09/multimedia/00russia-dubai-promo/00russia-dubai-promo-thumbLarge.jpg"}
                    ]
                }
            ])
        );
    })
]