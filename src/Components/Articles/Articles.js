import React, {useState} from 'react'
import './Articles.css'
import { ArticleCard } from '../../Components/ArticleCard/ArticleCard'
import nytSymbol from '../../Images/nytSymbol.png'
import { Link } from 'react-router-dom'

export const Articles = ({ articles }) => {
    const [category, setCategory] = useState('')
    const [saved, setsaved] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        filterArticles()
    }

    const filterArticles = () => {
        let saved = articles.filter(article => article.title.toLowerCase().includes(category.toLowerCase()) || article.section.toLowerCase().includes(category.toLowerCase()))
        setsaved(saved)
    }
    
    const savedCards = saved.map(article => {
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
        setsaved([])
    }

    const articleCards = articles.map(article => {
        return(
            <ArticleCard 
                multimedia={!article.multimedia ? nytSymbol : article.multimedia[0].url}
                title={article.title}
                key={article.title}
                id={article.title}
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
            {(saved.length === 0) && articleCards}
            {(saved.length > 0) && savedCards}
            </div>
        </div>
    )
}

export default Articles