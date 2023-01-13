import React, {useState} from 'react'
import './Articles.css'
import { ArticleCard } from '../../Components/ArticleCard/ArticleCard'
import nytSymbol from '../../Images/nytSymbol.png'

export const Articles = ({ articles }) => {
    const [category, setCategory] = useState('')
    console.log(category)
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
            multimedia={!article.multimedia ? nytSymbol : article.multimedia[0].url}
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