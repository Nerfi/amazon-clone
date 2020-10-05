//set up data layer
//we need tghis to track the basket, aka user items added
import React , {createContext, useContext, useReducer} from 'react';

//this is the data layer, initialy empty and here we're also creating the context
export const StateContext = createContext();

//we need a provider to wrap our app with this provider and give acces to this data laye
//this is a normal component that will return a component with a provider
//which will gives us the value and the state we need it and the function needs
export const StateProvider = ({reducer, initialState, children}) => (

 <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>

);

//this is how we use the info in any component and how we pull info from it as well
export const useStateValue = () => useContext(StateContext)
