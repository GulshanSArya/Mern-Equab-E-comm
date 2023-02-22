import { useEffect, useState } from "react";

const LoginSignup = ({login,signup}) =>{
    const blank_user = { username:'',password:'',name:''}
    const [showLogin,setShowLogin]= useState(true);
    const [user, setUser] = useState(blank_user);

useEffect(()=>{
setUser(blank_user)
},[showLogin])

const validateLogin = (user)=>{
if(!user.username || !user.password){
  alert("Please enter a required value")
}else{
  login(user);
}
}

const validateSignup = (user)=>{
  if(!user.username || !user.password || !user.name){
    alert("Please enter a required value")
  }else{
   signup(user);
  }
  }

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
            <form className="needs-validation" noValidate="" onSubmit={e=>{e.preventDefault();validateLogin(user)}}>

              <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Email" value={user.username} onChange={e=>setUser({...user,username:e.target.value})} />
                <div className="invalid-feedback">
                  Valid Email required
                </div>
              </div>
              <div>
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="password" required="" minLength="6" value={user.password} onChange={e=>setUser({...user,password:e.target.value})} />
                <div className="invalid-feedback">
                  Valid Password required (min 6 chars)
                </div>
              </div>
      
                <input type="submit" className="form-control btn-success" value="Login" />
            </form>
            <span className="link" onClick={()=>setShowLogin(false)}>Don't have an account? Create One</span>
        </div> : null }

       { !showLogin ? <div className="login-box m-auto mt-5 col-4">
              <h3 className="text-center">Sign Up</h3>
              <form className="needs-validation" noValidate="" onSubmit={e=>{e.preventDefault();validateSignup(user)}}>
                <div>
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Full Name" value={user.name} onChange={e=>setUser({...user,name:e.target.value})}/>
                  <div className="invalid-feedback">
                    Name required
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Email" value={user.username} onChange={e=>setUser({...user,username:e.target.value})}/>
                  <div className="invalid-feedback">
                    Valid Email required
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="password" required="" minLength="6" value={user.password} onChange={e=>setUser({...user,password:e.target.value})} />
                  <div className="invalid-feedback">
                    Valid Password required (min 6 chars)
                  </div>
                </div>
        
                  <input type="submit" className="form-control btn-success" value="Create Account"/>
              </form>
                <span className="link" onClick={()=>setShowLogin(true)}> Have an account? Login Here</span>

        </div> : null}


    </div>


</div>

)}

export default LoginSignup;