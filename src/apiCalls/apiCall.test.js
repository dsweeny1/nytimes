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
  test('that the GET request occurs when passed an argument', async () => {
      const url = `https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${process.env.REACT_APP_API_KEY}`
      
      act(() => {
        fetchArticlesData('food')
      })
  
      expect(fetch).toHaveBeenCalledTimes(1)
      expect(fetch).toHaveBeenCalledWith(url)
    })
  
    test('that a different GET request occurs when passed a different argument', async () => {
      const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`
      
      act(() => {
        fetchArticlesData('home')
      })
  
      expect(fetch).toHaveBeenCalledTimes(1)
      expect(fetch).toHaveBeenCalledWith(url)
    })
    test('that an argument can be passed in', () => {
        const argument = 'arts'
        const url = `https://api.nytimes.com/svc/topstories/v2/${argument}.json?api-key=${process.env.REACT_APP_API_KEY}`
      
      act(() => {
        fetchArticlesData(argument)
      })
  
      expect(fetch).toHaveBeenCalledTimes(1)
      expect(fetch).toHaveBeenCalledWith(url)
    })
})