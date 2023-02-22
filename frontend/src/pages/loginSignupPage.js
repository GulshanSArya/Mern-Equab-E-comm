import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAC, signupAC } from "../actions";
import Footer from "../components/footer";
import LoginSignup from "../components/login-signup";

function LoginSignupPage() {

const dispatch = useDispatch();
const navigate = useNavigate();
 const login = (user)=> {
  dispatch(loginAC(user,navigate));
   }
  const signup = (user)=>{
    dispatch(signupAC(user,navigate)); 
  }

  return ( 
    <>
    <LoginSignup  login={login} signup={signup}/>
    <Footer />
    </>
  );
}

export default LoginSignupPage;
