//selector
export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount,0);


//initial state layer
export const initialState = {
  basket: [],
  user: null,
  query: '',
  wishes: [],
};


const reducer = (state, action) => {
  //for debugginf porpuses
  console.log(action, 'action');

  switch(action.type) {

    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
      break;

    case 'ADD_TO_BASKET':
    //logic for adding item to basker
    return {
      ...state,
      basket:  [...state.basket, action.item]

    };

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }

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

      case 'SEARCH_QUERY':
        return {
          ...state,
          query: action.query
        }
        break;

        case 'ADD_TO_WISHES':
          return {
            ...state,
            wishes: [...state.wishes,action.item]
          }
          break;

        case 'REMOVE_FROM_WISHLIST':
        //make  a shallow copy of the old state in order to not to touch it directly
        let wishList = [...state.wishes];
        //check to see if wish exists and match the id of the action
        const wishIndex = state.wishes.findIndex((wishItem) => wishItem.id === action.id);
        //chwcking if there's a index(wish) , if we find it and if so, we'll remove it from the array, from the copy we made before
        if(wishIndex >= 0) {
          wishList.splice(wishIndex, 1);
        } else {
          console.log('cant remove it ')
        }

          return {
            ...state,
            wishes: wishList

          }
          break;

      default:
      return state;
  }
};

export default reducer;
