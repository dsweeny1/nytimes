import '@testing-library/jest-dom';
import { render, screen } from '../../test-utils/testing-library-utils';
import Articles from './Articles';
import { MemoryRouter } from 'react-router-dom';
import articles from '../../mocks/articleMockData'

describe('Articles component', () => {
    beforeEach(() => {
        render(<Articles articles={articles} />, {wrapper: MemoryRouter})
    })

    test('that all alt texts exist', () => {
        const mockAltTexts = articles.map(article => article.alt)
        const imageElements = screen.getAllByAltText('article')
        expect(imageElements.length).toEqual(mockAltTexts.length)
    })
    test('that all titles exist', () => {
        const mockArticleTitles = articles.map(article => article.title)
        console.log('mock', mockArticleTitles)
        const titleElement1 = screen.getByText(`Federal Reserve's Path Is Murkier After Bank Blowup`)
        const titleElement2 = screen.getByText(`Russia Outside Russia: For Elite, Dubai Becomes a Wartime Harbor`)
        expect(titleElement1).toBeInTheDocument()
        expect(titleElement2).toBeInTheDocument()
        expect(mockArticleTitles).toEqual(["Federal Reserve's Path Is Murkier After Bank Blowup", "Russia Outside Russia: For Elite, Dubai Becomes a Wartime Harbor"])
    })
    test('that all multimedia exists', () => {
        const mockArticleMedia = articles.map(article => article.multimedia[0])
        const mediaElement1 = screen.getByRole('img', {name: "https://static01.nyt.com/images/2023/03/13/multimedia/13dc-fed-pfjh/13dc-fed-pfjh-superJumbo.jpg"})
        const mediaElement2 = screen.getByRole('img', {name: "https://static01.nyt.com/images/2023/03/09/multimedia/00russia-dubai-promo/00russia-dubai-11-ltbq-superJumbo.jpg"})
        
        expect(mediaElement1).toBeInTheDocument()
        expect(mediaElement2).toBeInTheDocument()
        expect(mockArticleMedia).toEqual([{url: "https://static01.nyt.com/images/2023/03/13/multimedia/13dc-fed-pfjh/13dc-fed-pfjh-superJumbo.jpg"}, {url: "https://static01.nyt.com/images/2023/03/09/multimedia/00russia-dubai-promo/00russia-dubai-11-ltbq-superJumbo.jpg"}])
    })
})
