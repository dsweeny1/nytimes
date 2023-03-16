import React, { createContext, useReducer, useContext } from "react";
import savedReducer, { initialState } from "../Reducers/SavedReducer";

const SavedContext = createContext(initialState);
const SavedDispatchContext = createContext(() => {});

export const SavedProvider = ({ children }) => {
  const [state, dispatch] = useReducer(savedReducer, initialState);

  return (
    <SavedContext.Provider value={state}>
      <SavedDispatchContext.Provider value={dispatch}>
        {children}
      </SavedDispatchContext.Provider>
    </SavedContext.Provider>
  );
};

const useSaved = () => {
  const context = useContext(SavedContext);

  if (context === undefined) {
    throw new Error("useSaved must be used within SavedContext");
  }
  return context;
};

const useSavedDispatch = () => {
  return useContext(SavedDispatchContext);
};

export { SavedContext, SavedDispatchContext, useSaved, useSavedDispatch };
