import axios from "axios";
export const CHANGED_ITEM_IN_CART = "CHANGED_ITEM_IN_CART";
export const CHANGE_ORDER_CART = "CHANGE_ORDER_CART";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";
export const ADD_ADDRESS = "ADD_ADDRESS";
export const SET_SHIP_ADDRESS = "SET_SHIP_ADDRESS";
export const PLACE_ORDER ="PLACE_ORDER";
export const EMPTY_CART ="EMPTY_CART";
export const REMOVE_ITEM ="REMOVE_ITEM";
export const INIT_PRODUCTS ="INIT_PRODUCTS";
export const INIT_CART ="INIT_CART";
export const INIT_USER = "INIT_USER";

export const intializeProductAC = ()=>{
     
    return function(dispatch){
        axios.get('http://localhost:3005/products').then(function(response){
            console.log(response);
            dispatch({type: INIT_PRODUCTS,payload: response.data})
          })
          .catch(function(error){
            console.log(error);
          })
    
    }
}

export const intializeCartAC = (userId)=>{
     return function(dispatch){
        axios.get('http://localhost:3005/cart').then(function(response){
            console.log(response);
            dispatch({type: INIT_CART,payload:{items:response.data.items,userId:userId}})
          })
          .catch(function(error){
            console.log(error);
          })
    
    }
}

export const intializeUserAC = ()=>{
  return function(dispatch){
     axios.get('http://localhost:3005/user').then(function(response){
         console.log(response);
         dispatch({type: INIT_USER ,payload: response.data})
         dispatch(intializeCartAC());
       })
       .catch(function(error){
         console.log(error);
       })
 
 }
}

export const addToCartAC = (product)=>{
    return function(dispatch){
        changeCart(dispatch,product);
        }
    }

export const changeOrderWithCart = (cartItems)=>{
return function(dispatch){
dispatch({type:CHANGE_ORDER_CART,payload:cartItems})
}
}

export const changeQuantityAC = (item)=>{
    return function(dispatch){
    changeCart(dispatch,item)
    }
    }

export const addAddressAC = (address)=>{
        return function(dispatch){
        axios.post('http://localhost:3005/updateuseraddress',{address}).then(function(response){
         console.log(response);
         dispatch({type: ADD_ADDRESS, payload: response.data})
            })
        .catch(function(error){
         console.log(error);
        })
        //dispatch({type:ADD_ADDRESS, payload:address})
        }
}

export const setShipAddressAC = (address)=>{
    return function(dispatch){
    dispatch({type: SET_SHIP_ADDRESS, payload:address})
    }
}

export const placeOrderAC = (order)=>{
    return function(dispatch){
    dispatch({type:PLACE_ORDER,payload:order})
    }
    }

export const emptyCartAC = ()=>{
        return function(dispatch){
            axios.post('http://localhost:3005/emptycart').then(function(response){
            console.log(response);
            dispatch({type: CHANGED_ITEM_IN_CART,payload: response.data})
          })
          .catch(function(error){
            console.log(error);
          })
        //dispatch({type: EMPTY_CART})
        }
}

export const removeItemAC = (item)=>{
    return function(dispatch){
        axios.post('http://localhost:3005/removeitem',{item:item}).then(function(response){
            console.log(response);
            dispatch({type: CHANGED_ITEM_IN_CART,payload: response.data})
          })
          .catch(function(error){
            console.log(error);
          })
    //dispatch({type:REMOVE_ITEM,payload:item})
    }
    }

function changeCart(dispatch, item){
    axios.post('http://localhost:3005/cart',{item:item}).then(function(response){
        console.log(response);
        dispatch({type:CHANGED_ITEM_IN_CART,payload:response.data})
        })
        .catch(function(error){
        console.log(error);
        })
    }