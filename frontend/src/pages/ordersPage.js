import Nav from "../components/navbar";
import Orders from "../components/orders";
import Footer from "../components/footer";
import { useSelector } from "react-redux";


function OrdersPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const order = useSelector(state=>state.order) 
  const user = useSelector(state=>state.user)

  return (
    <> 
      <Nav cartCount={cartItems.length} />
      <h2>My Orders</h2>
      {user.orders.map(order=><Orders items={order.items} order={order} />
      )} 
      <Footer />
    </>
  );
}

export default OrdersPage;
