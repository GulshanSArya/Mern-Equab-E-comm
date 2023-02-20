import { useState } from "react";

const LoginSignup = () =>{
    const blank_user = { username:'',}
    const [showLogin,setShowLogin]= useState(true);

return(
    <div className="container my-5">
    <div>
      <a href="/" className="logo">
        <h1 className="text-center">e-Shopper</h1>
      </a>        
    </div>

    <div className="d-flex justify-content-center">
       

       {showLogin ?  <div className="login-box m-auto mt-5 col-4">
            <h3 className="text-center">Login</h3>
            <form className="needs-validation" novalidate="" action="">

              <div>
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Email" required="" />
                <div className="invalid-feedback">
                  Valid Email required
                </div>
              </div>
              <div>
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="password" required="" minlength="6" />
                <div className="invalid-feedback">
                  Valid Password required (min 6 chars)
                </div>
              </div>
      
                <input type="submit" className="form-control btn-success" value="Login" />
            </form>
            <span class="link" onClick={()=>setShowLogin(false)}>Don't have an account? Create One</span>
        </div> : null }

       { !showLogin ? <div className="login-box m-auto mt-5 col-4">
              <h3 className="text-center">Sign Up</h3>
              <form className="needs-validation" novalidate="" action="">
                <div>
                  <label for="name" className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Full Name" required=""/>
                  <div className="invalid-feedback">
                    Name required
                  </div>
                </div>
                <div>
                  <label for="email" className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Email" required=""/>
                  <div className="invalid-feedback">
                    Valid Email required
                  </div>
                </div>
                <div>
                  <label for="password" className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="password" required="" minlength="6"/>
                  <div className="invalid-feedback">
                    Valid Password required (min 6 chars)
                  </div>
                </div>
        
                  <input type="submit" className="form-control btn-success" value="Create Account"/>
              </form>
                <span class="link" onClick={()=>setShowLogin(true)}> Have an account? Login Here</span>

        </div> : null}


    </div>


</div>

)}

export default LoginSignup;