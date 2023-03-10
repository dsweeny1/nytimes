export const initialState = {
    savedArticles: []
  };
  console.log(initialState.savedArticles)

  const savedReducer = (state, action) => {
    const {type, payload} = action;
    console.log(typeof state.savedArticles)


    switch (action.type) {
        case 'ADD_TO_SAVED':
        console.log('ADD_TO_SAVED', state)

        return {
            ...state.savedArticles,
            savedArticles: payload.savedArticles
        }
        case 'DELETE_FROM_SAVED':
            console.log('DELETE_FROM_SAVED', payload)

            return {
                ...state.savedArticles,
                savedArticles: payload.savedArticles
            }
            default:
      throw new Error(`No case for type ${type} found in savedReducer.`);

    }
  }

  export default savedReducer