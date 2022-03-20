import { 
  ADD_ITEM_CART, 
  DELETE_ITEM_CART, 
  INCREMENT_ITEM_COUNT_CART, 
  DECREMENT_ITEM_COUNT_CART,
  CLEAR_CART, 
  INIT_CART } from '../actionType/userActionType'
  
  
  const initialState = { 
    cart: JSON.parse(localStorage.getItem('cart')) ?? []
  }
  
  export const cartReducer = (state = initialState, action) => {
    
    switch (action.type) {

    //*  >>>>> Добавить товар в корзину <<<<<  
    case ADD_ITEM_CART:
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };

    //* >>>>> -1 <<<<<
    case INCREMENT_ITEM_COUNT_CART: {
        console.log(action.payload.id);
        return {
          ...state, cart: state.cart.map(el => {
            if(el.bouquet.id === action.payload) {
              return { ...el, count: +el.count + 1 }
            } return el
          })
        }
    }

    //*  >>>>> +1 <<<<<
    case DECREMENT_ITEM_COUNT_CART:
      return {
        ...state, cart: state.cart.map(el => {
          if (el.bouquet.id === action.payload && el.count > 1) {
            return { ...el, count: +el.count - 1 };
          } return el;
        }),
      };
      
    //*  >>>>> Удалить товар из корзины <<<<<
    case DELETE_ITEM_CART:
      return {
        ...state, cart: state.cart.filter(el => {
          return el.bouquet.id !== action.payload
        }),
      };
    //*  >>>>> Очистить корзину <<<<<
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};



//   //* Init cart
//   case INIT_CART: {
//     return [ ...JSON.parse(localStorage.getItem('cart')) ]
//   }

//   //* Добавить товар в корзину
//   // case ADD_ITEM_CART: {
//   //     console.log('ADD_ITEM_CART', state);
//   //     // console.log('state add', state.cart);
//   //     // return { ...state, cart: [...state.cart, action.payload] }
//   //     // return [ ...state, action.payload ]
//   //       // ...state, cart: [...state.cart, action.payload.id]
//   //       return {
//   //         ...state,
//   //         cart: [...state.cart, action.payload],
//   //       };
//   //       // return {
//   //       //   ...state,
//   //       //   cart: [...state.cart, action.payload],
//   //       // };
//   // }

//   case ADD_ITEM_CART:
//       const findItem = state.cart.find(
//         el => el.id === action.payload.id
//       );
//       if (findItem) {
//         return {
//           ...state,
//           cart: state.cart.map(el => {
//             if (el.id === action.payload.id) {
//               return { ...el, count: el.count + action.payload.count };
//             }
//             return el;
//           }),
//         };
//       } else {
//         return {
//           ...state,
//           cart: [...state.cart, action.payload],
//         };
//       }


//   //*  Удалить товар из корзины
//   case DELETE_ITEM_CART: {
//     // console.log('DELETE_ITEM_CART',state, action.payload);
//     return state.filter((el) => {
//         return el.item.id !== action.payload
//       })
//   }

//   //* +1
//   case INCREMENT_ITEM_COUNT_CART: {

//   //  console.log('INCREMENT_ITEM_COUNT_CART','--', action.payload, '--',state, '--', state[0].count);
//   // console.log(['111', JSON.parse(window.localStorage.getItem('cart'))[0].count + 1]);
//     // return state.map(el => el.count = el.count + 1)
//   //  return [...state, state.cart]
//     // return state.map(el => {
//     //   if(el.item.id === action.payload) {
//     //     const res = el.assign({}, {count: 2})
//     //     return res
//     //   }
//     // })
    

//   //  return state.map((el) => {
//   //   console.log(el)
//   // })
//     // return [...JSON.parse(window.localStorage.getItem('cart')), ]
//   //  return [...state.map((el) => {
//   //    if(el.item.id === action.payload) {
//   //      return el.item.count + 1
//   //    } return el.item.count + 4
//   //  })]
//   //  return state.map((el) => {
//   //    if(el.item.id === action.payload.id) {
//   //      return { ...el, count: el.count + 1 }
//   //    } return el
//   //  })
//     // return [...state, state.map((el) => {
//     //   if(el.id === action.payload){
//     //     return el.count + 1
//     //   } return el
//     // })]
//     // return { ...state, cart: [...state.cart, action.payload] }
//     const ls = JSON.parse(window.localStorage.getItem('cart'))
//     return [ls.map((el, i) => {
//       if(el.item.id === action.payload.id) {
//         return [...el.item, el.count + 1]
//       } return el
//     })]
//   }

//   //* -1
//   case DECREMENT_ITEM_COUNT_CART: {
//     console.log('DECREMENT_ITEM_COUNT_CART','--', action.payload, '--',state, '--', state[1].count);
//     // console.log(state);
//     // return [...state, state.map((el) => {
//     //   if(el.id === action.payload){
//     //     return el.count - 1
//     //   } return el
//     // })]
//     // return { ...state, cart: [...state.cart, action.payload] }
//     return state
//   }
//   case CLEAR_CART: {
//     return state = []
//   }
    

//     default: {
//       return state
//     }
    
//   }
// }
