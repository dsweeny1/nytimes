import { fireEvent, logRoles, render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { fetchArticlesData } from '../../apiCalls/apiCall';
import { articles } from '../../mocks/articleMockData';
// jest.mock('../../apiCalls')

describe('App component', () => {
  let contentType
  // let mockedArticlesApiCall
  beforeEach(() => {
    contentType = {'Content-Type': 'application/json'}
    // mockedArticlesApiCall.mockResolvedValueOnce(articles)

    global.fetch = jest.fn(() => 
    Promise.resolve({
      json: () => Promise.resolve({mockReturn: {mockValue: 'The Payload'}})
    })
    )
  })
  afterEach(() => jest.restoreAllMocks())

  // test('that the request resolves', () => {
  //   expect(mockedArticlesApiCall).toHaveBeenCalled()
  // })

  test('that the correct argument is being called', async () => {
    const url = `https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${process.env.REACT_APP_API_KEY}`
    
    fetchArticlesData('food')

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(url)
  })

  test('that a different argument can be called', async () => {
    const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`
    
    fetchArticlesData('home')

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(url)
  })
  
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