import React, {createContext, useReducer, useContext} from 'react'
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
    const [state, dispatch] = useReducer(savedReducer, initialState)
    
    const saveArticle = (article) => {
        const savedList = state.savedArticles.push(article)
        
        dispatch({
            type: 'ADD_TO_SAVED',
            payload: {
                savedArticles: savedList
            }
        })
    }
    
    const deleteArticle = (article) => {
        const deleteList = state.savedArticles.filter(currentArticle => currentArticle !== article)

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
    }

    return(
        <div>
            <SavedContext.Provider value={value}>
                {children}
            </SavedContext.Provider>
        </div>
    )
}

export {SavedContext, useSaved}