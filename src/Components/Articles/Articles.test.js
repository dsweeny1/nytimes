import '@testing-library/jest-dom';
import { logRoles, render, screen } from '@testing-library/react';
import Articles from './Articles';
import { MemoryRouter } from 'react-router-dom';
import {mockArticles} from '../../mocks/articleMockData'

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
})
