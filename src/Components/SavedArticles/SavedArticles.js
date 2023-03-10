import React from 'react'
import { ArticleCard } from '../../Components/ArticleCard/ArticleCard'
import nytSymbol from '../../Images/nytSymbol.png'
import { initialState } from '../../Reducers/SavedReducer'

const SavedArticles = ({articles}) => {
    const toRead = initialState.savedArticles
    console.log('toRead', toRead)

    const toReadCards = toRead.reduce((savedResults, toReadArticle) => {
        articles.forEach(article => {
            if(article.title === toReadArticle) {
                savedResults.push(
                    <ArticleCard 
                        multimedia={!article.multimedia ? nytSymbol : article.multimedia[0].url}
                        title={article.title}
                        key={article.title}
                    />
                )
            }
        })
        return savedResults
    }, [])

    return(
        <div className='saved-article-container'>
            {toReadCards}
        </div>
    )
}

export default SavedArticles