//setup data layer for removing the problem of prop drilling

import React, { createContext, useReducer, useContext } from "react";

//this is data layer
export const StateContext = createContext();

// Build A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
