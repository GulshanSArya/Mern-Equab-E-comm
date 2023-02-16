import ProductList from "../components/product-list";
import Nav from "../components/navbar";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/carousal";
import Footer from "../components/footer";
import { addToCartAC, ADD_TO_CART } from "../actions";

function Home() {
const dispatch =useDispatch();
  const products = useSelector((state) => state.product.products);
  const cartItems= useSelector(state=>state.cart.items)
  
  const addToCart= (product) =>{
     dispatch(addToCartAC(product))
  }

  return ( 
    <>

    <Nav cartCount={cartItems.length}/>
    <Carousel />
    <ProductList products={products} addToCart={ addToCart } />
    <Footer />
    </>
  );
}


export default Home;
