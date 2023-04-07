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
import { fetchArticlesData } from '../../apiCalls/apiCall';

const App = () => {
  const [ articles, setArticles ] = useState([])
  const [ error, setError ] = useState(false)
  const [currentSection, setCurrentSection] = useState('')
  const { darkMode } = useContext(ThemeContext)

  useEffect(() => {
    const currentSelection = currentSection ? currentSection : 'home'

    fetchArticlesData(currentSelection)
    .then(data => {
      console.log(data.results)
      setArticles(data.results)
    })
    .catch((error) => {
      console.log(error)
      setError(true)
    })
  }, [currentSection])
  
  return (
      <SavedProvider>
    <div className={darkMode ? `App App-dark` : `App App-light`} data-testid={darkMode ? `App App-dark` : `App App-light`}>
      <div className="App">
        <Header />
        <LightSwtich />
        <Fragment>
          <Routes>
            <Route 
            path='/'
            element={!error ? <Articles setCurrentSection={setCurrentSection} setArticles={setArticles} articles={articles} /> : <Error />}
            />
            <Route 
            path='section/:section'
            element={!error ? <Articles setCurrentSection={setCurrentSection} setArticles={setArticles} articles={articles} /> : <Error />}
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
