import React, { useEffect } from 'react'
import { ArticleCard } from '../../Components/ArticleCard/ArticleCard'
import './SavedArticles.css'
import nytSymbol from '../../Images/nytSymbol.png'
import { useSaved } from '../../Contexts/SavedContext';

const SavedArticles = ({articles}) => {
    const {savedArticles} = useSaved()


    useEffect(() => {
    }, [savedArticles])

    const toReadCards = savedArticles.reduce((savedResults, toReadArticle) => {
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
            <div className='saved-article-cards'>
                {toReadCards}
            </div>
            {!savedArticles.length && (
                <h2>No Articles Saved Right Now!</h2>
            )}
        </div>
    )
}

export default SavedArticles