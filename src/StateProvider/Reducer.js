export const initialState = {
  basket: [{

    id: "sad4fa65sg46a4fg6a46fg",
    title: 'Iphone XII',
    rating: 2,
    price: 5248,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"


  }],
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
    return {
      ...state,

    }
    //logic for removing the item from the basket

      break;

      default:
      return state;
  }
};

export default reducer;
