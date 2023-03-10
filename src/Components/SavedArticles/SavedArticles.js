import React, { useEffect } from 'react'
import { ArticleCard } from '../../Components/ArticleCard/ArticleCard'
import nytSymbol from '../../Images/nytSymbol.png'
import { useSaved } from '../../Contexts/SavedContext';

const SavedArticles = ({articles}) => {
    const {savedArticles} = useSaved()


    useEffect(() => {
        // if(toRead.length < savedArticles.length) {
        //     toRead = savedArticles
        // }
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
            {toReadCards}
        </div>
    )
}

export default SavedArticles