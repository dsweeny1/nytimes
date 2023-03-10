import React, { useState, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import './ArticleCard.css'
import emptyHeart from "../../Images/empty-heart.svg";
import filledHeart from "../../Images/filled-heart.svg";
import { SavedContext, useSaved } from '../../Contexts/SavedContext';
import { initialState } from '../../Reducers/SavedReducer';

export const ArticleCard = ({ multimedia, title }) => {
    const [isSaved, setIsSaved] = useState(false)
    // const {toReadArticles, setToReadArticles} = useContext(SavedContext)
    const {saveArticle, deleteArticle, savedArticles} = useSaved()
    // const contextSavedArticles = initialState.savedArticles
    // console.log('context Arr', contextSavedArticles)

    const handleClick = () => {
        const article = { multimedia, title };
        console.log(article)
    
      if (isSaved) {
          deleteArticle(article);
        } else {
          saveArticle(article);
      }
    };

    useEffect(() => {
        const articleSaved = savedArticles.find((currentArticle) => currentArticle === title)

        if(articleSaved && savedArticles.includes(articleSaved)) {
            setIsSaved(true)
        } else if(articleSaved && !savedArticles.includes(articleSaved)){
            setIsSaved(false)
        }
    }, [title, savedArticles])

    return(
        <div className='article-card'>
        <Link to={`/${title}`} key={title} id={title} className='single-article-link'>
            <img className='article-image' src={multimedia} alt='article'/>
            <h2 className='article-title'>{title}</h2>
        </Link>
{/* 
        <button isSaved={isSaved} onClick={handleClick}>
            <img src={isSaved ? filledHeart : emptyHeart} alt={'save article'} />
        </button> */}

        {/* {!isSaved && (
            <button onClick={() => saveArticle(title)}>
            <img src={emptyHeart} alt={'save article'} />
        </button>
        )}
        {isSaved && (
            <button onClick={() => deleteArticle(title)}>
            <img src={filledHeart} alt={'delete article'} />
        </button>
        )} */}

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