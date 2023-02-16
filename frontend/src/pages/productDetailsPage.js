import Nav from "../components/navbar";
import Footer from "../components/footer";
import ProductDetails from "../components/product-details";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCartAC, ADD_TO_CART } from "../actions";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const{ productId } = useParams();
  const cartItems = useSelector(state => state.cart.items);
  const products = useSelector(state=>state.product.products)
 const product =products.find(p=>p.id == productId )
 console.log("////////////product",product);
 console.log("////////////products",products);
 console.log("////////////productid",productId);
 
 const addToCart = (product) =>{
  dispatch(addToCartAC(product))
 }

  return (
    <> 
      <Nav cartCount={cartItems.length} />
      <ProductDetails product={product}  addToCart={addToCart} />
      <Footer />
    </>
  )
  
}

export default ProductDetailsPage;
