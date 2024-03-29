import React, {useState} from 'react'
import './Articles.css'
import { ArticleCard } from '../../Components/ArticleCard/ArticleCard'
import nytSymbol from '../../Images/nytSymbol.png'
import { Link } from 'react-router-dom'
import Sections from '../../sectionData'

export const Articles = ({ articles, setCurrentSection }) => {
    const [category, setCategory] = useState('')
    const [filtered, setFiltered] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        filterArticles()
    }

    const filterArticles = () => {
        let filtered = articles.filter(article => article.title.toLowerCase().includes(category.toLowerCase()) || article.section.toLowerCase().includes(category.toLowerCase()))
        setFiltered(filtered)
    }
    
    const filteredCards = filtered.map((article, i) => {
        return(
            <ArticleCard 
            multimedia={article.multimedia === null ? nytSymbol : article.multimedia[0].url}
            title={article.title === '' ? 'Title Unavailable' : article.title}
            section={article.section}
            key={i}
            id={article.title}
            />
        )
    })

    const clearInputs = () => {
        setCategory('')
        setCurrentSection('home')
        setFiltered([])
    }

    const articleCards = articles.map((article, i) => {
        return(
            <ArticleCard 
                multimedia={!article.multimedia ? nytSymbol : article.multimedia[0].url}
                title={article.title}
                section={article.section}
                key={i}
                id={i}
            />
        )
    })

    return(
        <div className='article-container'>
            <div className='section-button-container'>
                    {Sections
                    .sort((a, b) => a - b)
                    .map((section, i) => <Link to={`/section/${section}`} key={section}><button className='section-button' onClick={(event) => setCurrentSection(event.target.value)} data-testid={i} key={i} id={i} value={section}>{section}</button></Link>)}
                </div>
            <div>
                <Link to={`saved-articles`}>
                    <button className='saved-articles'>Saved Articles</button>
                </Link>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <button className='reset-button' onClick={() => clearInputs()}>Reset</button>
                    <input
                            type='text'
                            className='text-input'
                            name='category'
                            placeholder='Search'
                            value={category}
                            onChange={event => setCategory(event.target.value)}
                        />
                    <button className='search-button' disabled={!category}>Search</button>
                </form>
            </div>
            <div className='articles'>
            {(filtered.length === 0) && articleCards}
            {(filtered.length > 0) && filteredCards}
            </div>
        </div>
    )
}

export default Articles