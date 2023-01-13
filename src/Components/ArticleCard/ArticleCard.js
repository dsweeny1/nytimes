import React from 'react'
import {Link} from 'react-router-dom'
import './ArticleCard.css'

export const ArticleCard = ({ multimedia, title }) => {
    return(
        <div className='card'>
        <Link to={`/${title}`} key={title} id={title} className='single-article-link'>
            <img className='article-image' src={multimedia} alt='article-image'/>
            <h2 className='article-title'>{title}</h2>
        </Link>
        </div>
    )
}