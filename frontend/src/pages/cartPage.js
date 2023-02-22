import Nav from "../components/navbar";
import Cart from "../components/cart";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { changeOrderWithCart, changeQuantityAC, removeItemAC} from "../actions";
import { useEffect } from "react";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  useEffect(()=>{
   dispatch(changeOrderWithCart(cartItems));
  },[cartItems])

  const changeQuantity = (quantity,item)=>{
dispatch(changeQuantityAC({...item,quantity:quantity}))

  }

  const removeItem = (item)=>{
    dispatch(removeItemAC(item))
      }
  
  const order = useSelector(state=>state.order)
  return (
    <> 
      <Nav cartCount={cartItems.length} />
      <Cart items={cartItems}  order={order} changeQuantity={changeQuantity} removeItem={removeItem} />
      <Footer />
    </>
  );
}

export default CartPage;
