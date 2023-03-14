import '@testing-library/jest-dom';
import { logRoles, render, screen } from '@testing-library/react';
import ArticleCard from './ArticleCard';
import { MemoryRouter } from 'react-router-dom';
import SavedProvider from '../../Contexts/SavedContext'

describe('Article Card component', () => {
    beforeEach(() => {
        render(<ArticleCard />, {wrapper: MemoryRouter})
        let contextValue = SavedProvider
        let dispatch = jest.fn()
    })
    test('that dispatch is working', () => {
        render(
            <SavedProvider value={contextValue}>
            </SavedProvider>
        )
    })
})