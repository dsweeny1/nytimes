import React, { useState, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import './ArticleCard.css'
import emptyHeart from "../../Images/empty-heart.svg";
import filledHeart from "../../Images/filled-heart.svg";
import { useSaved } from '../../Contexts/SavedContext';

export const ArticleCard = ({ multimedia, title }) => {
    const [isSaved, setIsSaved] = useState(false)
    const {saveArticle, deleteArticle, savedArticles} = useSaved()

    // useEffect(() => {
    //     const articleSaved = savedArticles.find((currentArticle) => currentArticle === title)

    //     if(articleSaved && savedArticles.includes(articleSaved)) {
    //         setIsSaved(true)
    //     } else if(articleSaved && !savedArticles.includes(articleSaved)){
    //         setIsSaved(false)
    //     }
    // }, [title, savedArticles])

    return(
        <div className='article-card'>
        <Link to={`/${title}`} key={title} id={title} className='single-article-link'>
            <img className='article-image' src={multimedia} alt='article'/>
            <h2 className='article-title'>{title}</h2>
        </Link>
        {!savedArticles.includes(title) && (
            <button onClick={() => saveArticle(title)}>
            <img src={emptyHeart} alt={'save article'} />
        </button>
        )}
        {savedArticles.includes(title) && (
            <button onClick={() => deleteArticle(title)}>
            <img src={filledHeart} alt={'delete article'} />
        </button>
        )}
        </div>
    )
}