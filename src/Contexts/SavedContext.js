import React, {createContext, useReducer, useContext} from 'react'
import savedReducer, { initialState } from '../Reducers/SavedReducer'

const SavedContext = createContext(initialState)

export const SavedProvider = ({children}) => {
    const [state, dispatch] = useReducer(savedReducer, initialState)
    
    const saveArticle = (article) => {
        
        dispatch({
            type: 'ADD_TO_SAVED',
            payload: {
                article: article
            }
        })
    }
    
    const deleteArticle = (article) => {

        dispatch({
            type: 'DELETE_FROM_SAVED',
            payload: {
                article: article
            }
        })
    }
    
    
    const value = {
        saveArticle,
        deleteArticle,
        savedArticles: state.savedArticles
    }

    return(
        <div>
            <SavedContext.Provider value={value}>
                {children}
            </SavedContext.Provider>
        </div>
    )
}

// export const value = {
//     saveArticle,
//     deleteArticle,
//     savedArticles: state.savedArticles
// }

const useSaved = () => {
    const context = useContext(SavedContext)

    if(context === undefined) {
        throw new Error('useSaved must be used within SavedContext')
    }
    return context
}

export {SavedContext, useSaved}