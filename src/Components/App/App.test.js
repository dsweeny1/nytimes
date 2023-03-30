import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { fetchArticlesData } from '../../apiCalls/apiCall';
import mockArticles from '../../mocks/articleMockData'

jest.mock('../../apiCalls/apiCall')

describe('App component', () => {
  beforeEach(() => {
    fetchArticlesData.mockResolvedValueOnce(mockArticles)
  })

  afterEach(() => jest.restoreAllMocks())
  
  test('that header text exists', () => {
      render(<App />, {wrapper: MemoryRouter});
    const headerText = screen.getByText(/new york times reader/i);
    expect(headerText).toBeInTheDocument();
  })
  test('that header logo exists', () => {
    render(<App />, {wrapper: MemoryRouter});
    const headerLogo = screen.getByAltText(/new york times symbol/i)
    expect(headerLogo).toBeInTheDocument()
  })
  test('that lightswitch exists', () => {
    render(<App />, {wrapper: MemoryRouter});
    const lightswitch = screen.getByAltText(/lightswitch/i)
    expect(lightswitch).toBeInTheDocument()
  })
  test('that the Saved Articles button exists', () => {
    render(<App />, {wrapper: MemoryRouter});
    const savedArticlesButton = screen.getByRole('button', {name: 'Saved Articles'})
    expect(savedArticlesButton).toBeInTheDocument()
  })
  test('that the Reset button exists', () => {
    render(<App />, {wrapper: MemoryRouter});
    const resetButton = screen.getByRole('button', {name: 'Reset'})
    expect(resetButton).toBeInTheDocument()
  })
  test('that search input exists', () => {
    render(<App />, {wrapper: MemoryRouter});
    const searchInput = screen.getByPlaceholderText(/search/i)
    expect(searchInput).toBeInTheDocument()
  })
  test('that the Search button exists', () => {
    render(<App />, {wrapper: MemoryRouter});
    const searchButton = screen.getByRole('button', {name: 'Search'})
    expect(searchButton).toBeInTheDocument()
  })
  test('that the github logo exists', () => {
    render(<App />, {wrapper: MemoryRouter});
    const gitLogo = screen.getByAltText(/github logo/i)
    expect(gitLogo).toBeInTheDocument()
  })
  test('that the linkedIn logo exists', () => {
    render(<App />, {wrapper: MemoryRouter});
    const linkedLogo = screen.getByAltText(/linkedin logo/i)
    expect(linkedLogo).toBeInTheDocument()
  })
})