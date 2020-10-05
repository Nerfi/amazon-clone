//set up data layer
//we need tghis to track the basket, aka user items added
import React , {createContext, useContext, useReducer} from 'react';

//this is the data layer
export const StateContext = createContext();

//we need a provider to wrap our app with this provider and give acces to this data layer
export const StateProvider = ({reducer, initialState, children}) => {
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
} ;
