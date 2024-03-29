export const initialState = {
  savedArticles: [],
};

const savedReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_SAVED":
      console.log("ADD_TO_SAVED", payload);

      return {
        ...state,
        savedArticles: [...state.savedArticles, payload.article],
      };
    case "DELETE_FROM_SAVED":
      console.log("DELETE_FROM_SAVED", payload);

      return {
        ...state,
        savedArticles: [
          ...state.savedArticles.filter(
            (currentArticle) => currentArticle !== payload.article
          ),
        ],
      };
    default:
      throw new Error(`No case for type ${type} found in savedReducer.`);
  }
};

export default savedReducer;