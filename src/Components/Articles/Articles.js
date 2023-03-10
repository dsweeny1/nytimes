import React, {useState} from 'react'
import './Articles.css'
import { ArticleCard } from '../../Components/ArticleCard/ArticleCard'
import nytSymbol from '../../Images/nytSymbol.png'
import { Link } from 'react-router-dom'

export const Articles = ({ articles }) => {
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
    
    const filteredCards = filtered.map(article => {
        return(
            <ArticleCard 
            multimedia={!article.multimedia === null ? nytSymbol : article.multimedia[0].url}
            title={article.title}
            key={article.title}
            />
        )
    })

    const clearInputs = () => {
        setCategory('')
        setFiltered([])
    }
    const articleCards = articles.map(article => {
        return(
            <ArticleCard 
                multimedia={!article.multimedia ? nytSymbol : article.multimedia[0].url}
                title={article.title}
                key={article.title}
            />
        )
    })
    return(
        <div className='article-container'>
            <div>
                <Link to={`saved-articles`}>
                    <button>Saved Articles</button>
                </Link>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <button className='reset-button' onClick={() => clearInputs()}>Reset</button>
                    <input
                            type='text'
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