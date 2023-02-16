import { ADD_TO_CART, CHANGE_ORDER_CART, CHANGE_QUANTITY, ADD_ADDRESS, SET_SHIP_ADDRESS, PLACE_ORDER, EMPTY_CART, REMOVE_ITEM} from "../actions";

const initialStateProduct = {
  products: [
    {
      id: 1,
      name: "Sony WX-5",
      price: 100,
      category: "Headphones",
      rating: 3,
      color: "red",
      size: "S",
      details: {
        product: "",
        warranty: "",
        merchant: "",
      },
      image: "product-1-square",
      images: ["product-1", "product-1-2", "product-1-3"],
    },
    {
      id: 2,
      name: "Apple Watch 2",
      price: 500,
      category: "SmartWatch",
      rating: 4,
      color: "black",
      size: "",
      details: {
        product: "",
        warranty: "",
        merchant: "",
      },
      image: "product-2-square",
      images: ["product-2", "product-2-2", "product-2-3"],
    },
    {
      id: 3,
      name: "Apple iPhone 11",
      price: 799,
      category: "Mobile",
      rating: 4,
      color: "black",
      size: "",
      details: {
        product: "",
        warranty: "",
        merchant: "",
      },
      image: "product-3-square",
      images: ["product-3", "product-3-2", "product-3-3"],
    },
  ],
};

const initialStateCart = {
    items: []
}

const initialStateOrder = {
  items: [],
  shipping_charges : 50,
  discount_in_percent :10,
  shipping_address : '',
  total_items:0,
  total_cost:0,
};

const initialStateUser={
  name:'gulshan',
  email:"gulshan@gmail.com",
  addresses: [
    {
      first_name:"gulshan",
      last_name:'yadav',
      address1: '123',
      address2:'palri',
      country:'india',
      state:'haryana',
      pin_code:'127310',
      phone:'8398928949',
    },
    {
      first_name:"gulshan",
      last_name:'sarya',
      address1: '456',
      address2:'palri12',
      country:'india',
      state:'haryana',
      pin_code:'127310',
      phone:'9896975444'
    },
  ],
  orders:[],
}

const productReducer = (state = initialStateProduct, action) => {
  return state;
};

const cartReducer = (state = initialStateCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.items.find((item) => item.id === action.payload.id)) {
        return state;
      }
      return {...state, items: [...state.items, { ...action.payload, quantity: 1 }], };
    case CHANGE_QUANTITY:
      const oldItem = state.items.find((item) => item.id === action.payload.id) 
       const index = state.items.indexOf(oldItem);
       const newItems = [...state.items]
       newItems[index] = action.payload;
       return {...state, items:newItems };
       case REMOVE_ITEM:
        const item = action.payload;
        const i = state.items.findIndex(it=>it.id===item.id)
        const itemsArray = [...state.items];
        itemsArray.splice(i,1);
        return {...state, items: itemsArray}
      case EMPTY_CART:
        return {...state, items:[]}
     
      default:
      return state;
  }
};

const orderReducer = (state = initialStateOrder, action) => {
  switch (action.type) {
   case CHANGE_ORDER_CART:
    const items=action.payload;
    const total_items = items.reduce((total,item)=>total+(item.quantity*1),0)
    const total_cost = items.reduce((total,item)=>total+item.price*item.quantity,0)
    return {...state,items:action.payload,total_items,total_cost}
    case SET_SHIP_ADDRESS:
      return{...state, shipping_address:action.payload}
    
    default:
      return state;
  }
};

const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return {...state, addresses:[...state.addresses,action.payload]}
    case PLACE_ORDER:
      return {...state, orders:[...state.orders,action.payload]}
      default:
      return state;
  } 
};

export {productReducer, cartReducer, orderReducer, userReducer};