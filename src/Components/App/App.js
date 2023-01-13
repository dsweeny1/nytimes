import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import { Articles } from '../Articles/Articles';
import { Route, Routes } from 'react-router-dom'
import SingleArticle from '../SingleArticle/SingleArticle';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import Error from '../Error/Error'

const App = () => {
  const [ articles, setArticles ] = useState([])
  const [ error, setError ] = useState(false)

  const articlesBySection = async () => {
    const url = (`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)

    try{
      let response = await fetch(url)
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
    <div className="App">
      <Header />
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
        </Routes>
      </Fragment>
      <Footer />
    </div>
  );
}

export default App;
