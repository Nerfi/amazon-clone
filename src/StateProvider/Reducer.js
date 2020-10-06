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
    //copyinh whatever was in the old state basket.
      let newBasket = [...state.basket];
      //check to see if product exists and match the id of the action
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

      // index >= 0 means if there is an index, if exists
      if(index >= 0) {
        //item exist in basket, remove it
        //the splice method in this case will go to the index he found throught findIndex method and delete one item. read docs for more info
        newBasket.splice(index,1);
      } else {
        console.warn('Can not remove item from basket');
      }

      return {
        ...state,
        basket: newBasket,

      }

      break;

      default:
      return state;
  }
};

export default reducer;
