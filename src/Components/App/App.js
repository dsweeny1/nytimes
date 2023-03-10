import React, { useState, useEffect, Fragment, useContext } from 'react';
import './App.css';
import Articles from '../Articles/Articles';
import { Route, Routes } from 'react-router-dom'
import SingleArticle from '../SingleArticle/SingleArticle';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import Error from '../Error/Error'
import loading from '../../Images/loading.png'
import { ThemeContext } from '../../Contexts/ThemeContext';
import LightSwtich from '../LightSwitch/LightSwitch';
import { SavedProvider } from '../../Contexts/SavedContext';
import SavedArticles from '../SavedArticles/SavedArticles';

const App = () => {
  const [ articles, setArticles ] = useState([])
  const [ error, setError ] = useState(false)
  const { darkMode } = useContext(ThemeContext)

  const articlesBySection = async () => {
    const url = (`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)

    try{
      let response = await fetch(url)
      console.log(response)
      let data = await response.json()
      if(!response.ok) {
        setError(true)
        throw new Error(response.status)
      }
      setArticles(data.results)
    } catch (error) {
      console.log(error)
    }
}

  useEffect(() => {
    articlesBySection()
  }, [])
  
  return (
    <SavedProvider>
    <div className={darkMode ? `App App-dark` : `App App-light`}>
      <div className="App">
        <Header />
        <LightSwtich />
        <Fragment>
          <Routes>
            <Route 
            path='/'
            element={!error ? <Articles articles={articles} /> : <Error />}
            />
            <Route 
            path=':id'
            element={!error ? <SingleArticle articles={articles}/> : <Error />}
            />
            <Route
            path='saved-articles'
            element={!error ? <SavedArticles articles={articles}/> : <Error />}
            />
            <Route 
            path='*'
            element={<Error />}
            />
          </Routes>
        </Fragment>
        <Footer />
        {!error && !articles.length && (
          <div>
            <img src={loading} alt='loading' className='loading-image' />
          </div>
        )}
      </div>
    </div>
    </SavedProvider>
  );
}

export default App;
