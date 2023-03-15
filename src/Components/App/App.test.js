import { logRoles, render, screen } from '../../test-utils/testing-library-utils';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App component', () => {
  beforeEach(() => {
    render(<App />, {wrapper: MemoryRouter});
  })
  test('that header text exists', () => {
    const headerText = screen.getByText(/new york times reader/i);
    expect(headerText).toBeInTheDocument();
  })
  test('that header logo exists', () => {
    const headerLogo = screen.getByAltText(/new york times symbol/i)
    expect(headerLogo).toBeInTheDocument()
  })
  test('that lightswitch exists', () => {
    const lightswitch = screen.getByAltText(/lightswitch/i)
    expect(lightswitch).toBeInTheDocument()
  })
  test('that the Saved Articles button exists', () => {
    const savedArticlesButton = screen.getByRole('button', {name: 'Saved Articles'})
    expect(savedArticlesButton).toBeInTheDocument()
  })
  test('that the Reset button exists', () => {
    const resetButton = screen.getByRole('button', {name: 'Reset'})
    expect(resetButton).toBeInTheDocument()
  })
  test('that search input exists', () => {
    const searchInput = screen.getByPlaceholderText(/search/i)
    expect(searchInput).toBeInTheDocument()
  })
  test('that the Search button exists', () => {
    const searchButton = screen.getByRole('button', {name: 'Search'})
    expect(searchButton).toBeInTheDocument()
  })
  test('that the github logo exists', () => {
    const gitLogo = screen.getByAltText(/github logo/i)
    expect(gitLogo).toBeInTheDocument()
  })
  test('that the linkedIn logo exists', () => {
    const linkedLogo = screen.getByAltText(/linkedin logo/i)
    expect(linkedLogo).toBeInTheDocument()
  })
})