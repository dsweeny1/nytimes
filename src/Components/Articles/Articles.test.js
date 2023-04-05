import '@testing-library/jest-dom';
import { fireEvent, logRoles, render, screen, waitFor } from '@testing-library/react';
import Articles from './Articles';
import { MemoryRouter } from 'react-router-dom';
import {mockArticles, filteredArts} from '../../mocks/articleMockData'
import { fetchArticlesData } from '../../apiCalls/apiCall';

jest.mock('../../apiCalls/apiCall')

describe('Articles component', () => {
    test('that mocked data is being used', () => {
        render(<Articles articles={mockArticles} />, {wrapper: MemoryRouter})
        expect(mockArticles.length).toEqual(2)
    })
    test('that all alt texts exist', () => {
        render(<Articles articles={mockArticles} />, {wrapper: MemoryRouter})
    const mockAltTexts = mockArticles.map(article => article.alt)
    const imageElements = screen.getAllByAltText('article')
    expect(imageElements.length).toEqual(mockAltTexts.length)
    })
    test('that all titles exist', () => {
        render(<Articles articles={mockArticles} />, {wrapper: MemoryRouter})
        const mockArticleTitles = mockArticles.map(article => article.title)
        mockArticles.forEach(article => {
            const titleElement1 = screen.getByText(`${article.title}`)
            const titleElement2 = screen.getByText(`${article.title}`)
            expect(titleElement1).toBeInTheDocument()
            expect(titleElement2).toBeInTheDocument()
        })
        expect(mockArticleTitles).toEqual(["Federal Reserve's Path Is Murkier After Bank Blowup", "Russia Outside Russia: For Elite, Dubai Becomes a Wartime Harbor"])
    })
    test('that all multimedia exists', () => {
        render(<Articles articles={mockArticles} />, {wrapper: MemoryRouter})
        const mockArticleMedia = mockArticles.map(article => article.multimedia[0])
        mockArticles.forEach(article => {
            const mediaElement1 = screen.getByRole('img', {name: `${article.multimedia[0].url}`})
            const mediaElement2 = screen.getByRole('img', {name: `${article.multimedia[0].url}`})
            
            expect(mediaElement1).toBeInTheDocument()
            expect(mediaElement2).toBeInTheDocument()
        })
        expect(mockArticleMedia).toEqual([{url: "https://static01.nyt.com/images/2023/03/13/multimedia/13dc-fed-pfjh/13dc-fed-pfjh-superJumbo.jpg"}, {url: "https://static01.nyt.com/images/2023/03/09/multimedia/00russia-dubai-promo/00russia-dubai-11-ltbq-superJumbo.jpg"}])
    })
    test.only('that when arts section is clicked only arts articles are shown', async() => {
        // act(() => {
            fetchArticlesData.mockResolvedValueOnce(filteredArts)
            render(<Articles articles={mockArticles} />, {wrapper: MemoryRouter})
        // })
        const articleCardsWorld = screen.getAllByTestId('article-card-world')
        const articleCardsArts = screen.getAllByTestId('article-card-arts')
        expect(articleCardsWorld.length).toBe(2)
        expect(articleCardsArts.length).toBe(1)
        const sectionButton = screen.getByTestId('arts')
        fireEvent.click(sectionButton)
        const articleCardsWorld2 = screen.queryAllByTestId('article-card-world')
        await waitFor(() => {
            expect(articleCardsWorld2).toBe(null)
            // expect(articleCardsArts.length).toBe(1)
        })
    })
})
