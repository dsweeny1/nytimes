import '@testing-library/jest-dom';
import { fetchArticlesData } from './apiCall';
import { act } from 'react-dom/test-utils';

describe('APICall', () => {
    let type
    beforeEach(() => {
        type = {'Content-Type': 'application/json'}

    global.fetch = jest.fn(() => 
    Promise.resolve({
      json: () => Promise.resolve({mockReturn: {mockValue: 'The Payload'}})
    })
    )
  })
  afterEach(() => jest.restoreAllMocks())
  test('that the correct argument is being called', async () => {
      const url = `https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${process.env.REACT_APP_API_KEY}`
      
      act(() => {
        fetchArticlesData('food')
      })
  
      expect(fetch).toHaveBeenCalledTimes(1)
      expect(fetch).toHaveBeenCalledWith(url)
    })
  
    test('that a different argument can be called', async () => {
      const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`
      
      act(() => {
        fetchArticlesData('home')
      })
  
      expect(fetch).toHaveBeenCalledTimes(1)
      expect(fetch).toHaveBeenCalledWith(url)
    })
})