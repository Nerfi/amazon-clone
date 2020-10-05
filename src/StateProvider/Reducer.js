export const initialState = {
  basket: [],
  user: null,
};


const reducer = (state, action) => {
  //for debugginf porpuses
  console.log(action, 'action');

  switch(action.type) {

    case 'ADD_TO_BASKET':
    //logic for adding item to basker
    return {
      ...state,
      basket:  [...state.basket, action.item]

    };

      break;
    case 'REMOVE_FROM_BASKET':
    //logic for removing the item from the basket

      break;

      default:
      return state;
  }
};

export default reducer;
