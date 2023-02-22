import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { checkAuthAC } from "./actions";
import "./App.css";


function App() {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthAC(navigate));
  }, [])
  
    return (
      <Outlet />
  );
}

export default App;
