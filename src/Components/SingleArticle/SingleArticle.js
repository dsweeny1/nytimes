import React from 'react'
import { useParams } from 'react-router-dom'
import './SingleArticle.css'
const dayjs = require('dayjs')

const SingleArticle = ({ articles }) => {
    const params = useParams()
    console.log(params)
    const findArticle = articles.find(article => article.title.includes(params.id))
        return(
            <div key={findArticle.title} id={findArticle.title}>
                <img src={findArticle.multimedia[0].url} height='400px'/>
                <h2>{findArticle.title}</h2>
                <h3>{findArticle.abstract}</h3>
                <h4>{findArticle.byline}</h4>
                <h4>Published: {dayjs(findArticle.published_date).format('MMMM, D, YYYY')}</h4>
                <h4>Section: {findArticle.section}</h4>
                <a className='link' href={findArticle.url} target={'_blank'}>Read more ...</a>
            </div>
        )
}

export default SingleArticle