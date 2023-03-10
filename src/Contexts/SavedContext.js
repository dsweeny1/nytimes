import React, {createContext, useReducer, useContext, useState} from 'react'
import savedReducer, { initialState } from '../Reducers/SavedReducer'

const SavedContext = createContext(initialState)

const useSaved = () => {
    const context = useContext(SavedContext)

    if(context === undefined) {
        throw new Error('useSaved must be used within SavedContext')
    }
    return context
}

export const SavedProvider = ({children}) => {
    // const [toReadArticles, setToReadArticles] = useState(() => {
    //     const localData = localStorage.getItem('toReadArticles')
    //     return localData ? JSON.parse(localData) : 
    // })
    
    const [state, dispatch] = useReducer(savedReducer, initialState)
    
    const saveArticle = (article) => {
        const savedList = initialState.savedArticles.includes(article) ? null : initialState.savedArticles.push(article)

        dispatch({
            type: 'ADD_TO_SAVED',
            payload: {
                savedArticles: savedList
            }
        })
    }
    
    const deleteArticle = (article) => {
        const deleteList = initialState.savedArticles.filter(currentArticle => currentArticle !== article)

        dispatch({
            type: 'DELETE_FROM_SAVED',
            payload: {
                savedArticles: deleteList
            }
        })
    }
    
    
    const value = {
        saveArticle,
        deleteArticle,
        savedArticles: state.savedArticles,
        // toReadArticles,
        // setToReadArticles
    }

    // useEffect(() => {
    //     localStorage.setItem('toReadArticles', JSON.stringify(toReadArticles))
    // }, [toReadArticles])

    return(
        <div>
            <SavedContext.Provider value={value}>
                {children}
            </SavedContext.Provider>
        </div>
    )
}

export {SavedContext, useSaved}