import '@testing-library/jest-dom';
import { logRoles, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SingleArticle from './SingleArticle';
import {mockArticles, mockArticle} from '../../mocks/articleMockData'
import Router from 'react-router-dom'

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({ id: mockArticle.title }),
  }));

describe('Single Article component', () => {
    test('that title exist', () => {
        render(<SingleArticle articles={mockArticles} />, {wrapper: MemoryRouter})

        const mockSingleArticleTitle = screen.getByTestId('article-title')
        expect(mockSingleArticleTitle).toBeInTheDocument()
    })
    test('that the multimedia exists', () => {
        render(<SingleArticle articles={mockArticles} />, {wrapper: MemoryRouter})

        const mockSingleArticleMultimedia = screen.getByTestId('article-multimedia')
        expect(mockSingleArticleMultimedia).toBeInTheDocument()
    })
    test('that the abstract exists', () => {
        render(<SingleArticle articles={mockArticles} />, {wrapper: MemoryRouter})

        const mockSingleArticleAbstract = screen.getByTestId('article-abstract')
        expect(mockSingleArticleAbstract).toBeInTheDocument()
    })
    test('that the byline exists', () => {
        render(<SingleArticle articles={mockArticles} />, {wrapper: MemoryRouter})

        const mockSingleArticleByline = screen.getByTestId('article-byline')
        expect(mockSingleArticleByline).toBeInTheDocument()
    })
    test('that the published date exists', () => {
        render(<SingleArticle articles={mockArticles} />, {wrapper: MemoryRouter})

        const mockSingleArticlePublishedDate = screen.getByTestId('date-published')
        expect(mockSingleArticlePublishedDate).toBeInTheDocument()
    })
    test('that the section exists', () => {
        render(<SingleArticle articles={mockArticles} />, {wrapper: MemoryRouter})

        const mockSingleArticleSection = screen.getByTestId('article-section')
        expect(mockSingleArticleSection).toBeInTheDocument()
    })
    test('that the link exists', () => {
        render(<SingleArticle articles={mockArticles} />, {wrapper: MemoryRouter})

        const mockSingleArticleLink = screen.getByTestId('article-link')
        expect(mockSingleArticleLink).toBeInTheDocument()
    })
})