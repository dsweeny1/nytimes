import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import ArticleCard from './ArticleCard';
import { MemoryRouter } from 'react-router-dom';
import {SavedProvider} from '../../Contexts/SavedContext'
import {mockArticle} from '../../mocks/articleMockData'
import {articles} from '../../mocks/articleMockData'

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom')),
    useLocation: () => ({ pathname: mockArticle.title }),
    useParams: () => ({title: mockArticle.title}),
  }));

  const mockValue = {
    saveArticle: jest.fn(),
    deleteArticle: jest.fn(),
    contextValue: articles,
  }

describe('Article Card component', () => {
    render(<ArticleCard />, {wrapper: MemoryRouter})
    let contextValue
    
    beforeEach(() => {
        contextValue = mockValue
        console.log(contextValue)
})

    test('that dispatch is working', async () => {

        contextValue.savedArticles = [
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

        render(
            <SavedProvider value={contextValue}>
                <ArticleCard />
            </SavedProvider>,
            {wrapper: MemoryRouter}
        )

        const saveButton = screen.getByRole('button', {name: 'save article'})
        fireEvent.click(saveButton)
        expect(contextValue.saveArticle).toHaveBeenCalledWith(mockValue.saveArticle)

    })
})