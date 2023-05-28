import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import nytSymbol from '../../Images/nytSymbol.png'

const Header = ({articles, setArticles, setCurrentSection}) => {

    const goHome = () => {
            setCurrentSection('')
            setArticles(articles)
    }

    return(
        <div className='header-container'>
            <div className='logo-container'>
                <Link to='/'>
                    <button onClick={() => goHome()}>
                        <img className='nyt-logo' src={nytSymbol} alt='new york times symbol' />
                    </button>
                </Link>
            </div>
                <h1 className='header-title'>New York Times Reader</h1>
        </div>
    )
}

export default Header