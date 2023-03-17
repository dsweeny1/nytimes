import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SavedArticles from './SavedArticles';
import {articles, savedArticles} from '../../mocks/articleMockData'

describe('Saved Articles component', () => {
    test('that the page starts with no articles', () => {
        const {savedArticlesContainer} = render(<SavedArticles articles={articles}/>, {wrapper: MemoryRouter})
    
        const savedArticlesText = screen.getByText(/no articles saved right now!/i)
        expect(savedArticlesText).toBeInTheDocument()
    })
})