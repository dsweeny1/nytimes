const mockArticles = [
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
        ],
        alt: 'article'
    },
    {
        title: 
        "Russia Outside Russia: For Elite, Dubai Becomes a Wartime Harbor",
        url:"https://www.nytimes.com/2023/03/13/world/europe/russia-dubai-ukraine-war.html",
        abstract: "In the exclusive neighborhoods and palatial shopping malls of the United Arab Emirates’ biggest city, wealthy Russians can build a new life without having to cut ties to their home country.",
        byline: "By Anton Troianovski and Andrea DiCenzo",
        published_date: "2023-03-13T05:00:32-04:00",
        section: "world",
        multimedia: [
            {url: "https://static01.nyt.com/images/2023/03/09/multimedia/00russia-dubai-promo/00russia-dubai-11-ltbq-superJumbo.jpg"},
            {url: "https://static01.nyt.com/images/2023/03/09/multimedia/00russia-dubai-promo/00russia-dubai-promo-thumbLarge.jpg"}
        ],
        alt: 'article'
    },
    {
        abstract: "The ex-president’s indictment put him in the rare position of being forced onto a public stage not of his own choosing.",
        byline: "By James Poniewozik",
        published_date: "2023-04-05T07:33:16-04:00",
        section: "arts",
        title: "For Once, Donald Trump Did Not Enjoy the Show",
        multimedia: [{url: "https://static01.nyt.com/images/2023/04/05/multimedia/05trumptv-notebook-wvfl/05trumptv-notebook-wvfl-superJumbo.jpg"
        }],
        alt: 'article'
    }
]

const filteredArts = [{
    abstract: "The ex-president’s indictment put him in the rare position of being forced onto a public stage not of his own choosing.",
    byline: "By James Poniewozik",
    published_date: "2023-04-05T07:33:16-04:00",
    section: "arts",
    title: "For Once, Donald Trump Did Not Enjoy the Show",
    multimedia: [{url: "https://static01.nyt.com/images/2023/04/05/multimedia/05trumptv-notebook-wvfl/05trumptv-notebook-wvfl-superJumbo.jpg"
    }],
    alt: 'article'
}]

    const mockArticle = {
        title: "Federal Reserve's Path Is Murkier After Bank Blowup",
        url: "https://www.nytimes.com/2023/03/13/business/economy/federal-reserve-interest-rates.html",
        abstract: "The Federal Reserve has been rapidly raising interest rates to fight inflation. But making big moves could be trickier amid instability.",
        byline: "By Jeanna Smialek",
        published_date: "2023-03-13T05:00:32-04:00",
        section: "world",
        multimedia: [
            {url: "https://static01.nyt.com/images/2023/03/13/multimedia/13dc-fed-pfjh/13dc-fed-pfjh-superJumbo.jpg"},
            {url: "https://static01.nyt.com/images/2023/03/13/multimedia/13dc-fed-pfjh/13dc-fed-pfjh-threeByTwoSmallAt2X.jpg"}
        ],
        alt: 'article'
    }

    const savedmockArticles = [
        {
            title: "Flood of Russians Alters Life for Countries That Took Them In",
            url: "https://www.nytimes.com/2023/03/14/world/europe/russians-georgia-armenia-war.html",
            abstract: "Russians, fleeing their country and its war, have quickly reshaped the societies of nations like Georgia and Armenia.",
            byline: "By Sergey Ponomarev and Ivan Nechepurenko",
            published_date: "2023-03-14T05:14:17-04:00",
            section: "world",
            multimedia: [
                {url: "https://static01.nyt.com/images/2023/01/27/world/europe/SP01/SP01-superJumbo.jpg"},
                {url:
                    "https://static01.nyt.com/images/2023/01/27/world/europe/SP01/SP01-threeByTwoSmallAt2X.jpg"}
            ],
            alt: 'article'
        },
        {
            title: "Russia's Mercenary Chief Prepares Ground for a Political Advance",
            url:"https://www.nytimes.com/2023/03/13/world/europe/russia-dubai-ukraine-war.html",
            abstract: "Yevgeny Prigozhin says his Wagner force will shrink when the battle for the Ukrainian city of Bakhmut is done. Now he’s maneuvering on the home front, for the favor of President Vladimir V. Putin.",
            byline: "By Anatoly Kurmanaev",
            published_date: "2023-03-14T07:47:38-04:00",
            section: "world",
            multimedia: [
                {url: "https://static01.nyt.com/images/2023/03/14/multimedia/14russia-prigozhin-01-qztb/14russia-prigozhin-01-qztb-superJumbo.jpg"},
                {url: "https://static01.nyt.com/images/2023/03/14/multimedia/14russia-prigozhin-01-qztb/14russia-prigozhin-01-qztb-threeByTwoSmallAt2X.jpg"}
            ],
            alt: 'article'
        }]

        const mockSingleArticle = {
            title: "Russia's Mercenary Chief Prepares Ground for a Political Advance",
            url:"https://www.nytimes.com/2023/03/13/world/europe/russia-dubai-ukraine-war.html",
            abstract: "Yevgeny Prigozhin says his Wagner force will shrink when the battle for the Ukrainian city of Bakhmut is done. Now he’s maneuvering on the home front, for the favor of President Vladimir V. Putin.",
            byline: "By Anatoly Kurmanaev",
            published_date: "2023-03-14T07:47:38-04:00",
            section: "world",
            multimedia: [
                {url: "https://static01.nyt.com/images/2023/03/14/multimedia/14russia-prigozhin-01-qztb/14russia-prigozhin-01-qztb-superJumbo.jpg"},
                {url: "https://static01.nyt.com/images/2023/03/14/multimedia/14russia-prigozhin-01-qztb/14russia-prigozhin-01-qztb-threeByTwoSmallAt2X.jpg"}
            ],
            alt: 'article'
        }

    export {mockArticles, mockArticle, savedmockArticles, mockSingleArticle, filteredArts}