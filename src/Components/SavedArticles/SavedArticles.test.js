import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SavedArticles from './SavedArticles';
import { MemoryRouter } from 'react-router-dom';
import articles from '../../mocks/articleMockData'
import savedArticles from '../../mocks/savedArticlesMock'

test('Saved Articles component', () => {
    const {savedArticlesContainer} = render(<SavedArticles articles={articles}/>, {wrapper: MemoryRouter})

    const savedArticlesText = screen.getByText(/no articles saved right now!/i)
    expect(savedArticlesText).toBeInTheDocument()

    const savedArticlesTitle = savedArticles.map(saved => saved.title)
    expect(savedArticlesTitle).toEqual(["Flood of Russians Alters Life for Countries That Took Them In", "Russia's Mercenary Chief Prepares Ground for a Political Advance"])
})