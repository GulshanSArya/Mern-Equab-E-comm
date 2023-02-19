import ProductList from "../components/product-list";
import Nav from "../components/navbar";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/carousal";
import Footer from "../components/footer";
import { addToCartAC, CHANGED_ITEM_IN_CART, intializeCartAC, intializeProductAC, intializeUserAC } from "../actions";
import { useEffect } from "react";

function Home() {
const dispatch =useDispatch();
  const products = useSelector((state) => state.product.products);
  const cartItems= useSelector(state=>state.cart.items)
  
  useEffect(()=>{
   dispatch(intializeUserAC());
   dispatch(intializeProductAC());
  
  
  },[])
  
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
