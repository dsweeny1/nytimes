import { logRoles, render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('components exist', () => {
  render(<App />, {wrapper: MemoryRouter});
  // logRoles(container)
  
  const headerText = screen.getByText(/new york times reader/i);
  expect(headerText).toBeInTheDocument();
  
  const headerLogo = screen.getByAltText(/new york times symbol/i)
  expect(headerLogo).toBeInTheDocument()
  
  const lightswitch = screen.getByAltText(/lightswitch/i)
  expect(lightswitch).toBeInTheDocument()
  
  const savedArticlesButton = screen.getByRole('button', {name: 'Saved Articles'})
  expect(savedArticlesButton).toBeInTheDocument()
  
  const resetButton = screen.getByRole('button', {name: 'Reset'})
  expect(resetButton).toBeInTheDocument()
  
  const searchInput = screen.getByPlaceholderText(/search/i)
  expect(searchInput).toBeInTheDocument()
  
  const searchButton = screen.getByRole('button', {name: 'Search'})
  expect(searchButton).toBeInTheDocument()

  const gitLogo = screen.getByAltText(/github logo/i)
  expect(gitLogo).toBeInTheDocument()

  const linkedLogo = screen.getByAltText(/linkedin logo/i)
  expect(linkedLogo).toBeInTheDocument()
});
