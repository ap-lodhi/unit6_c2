import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { login } from "../store/actions";
const Login =()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    

  const {loading , error, data} =useSelector(state =>state )
  
  console.log("dnfkd", data)

    const handleLogin = () => {
     dispatch(login(email, password))
            

    };
  
    return (
      <div>
        <h1>LOGIN</h1>
        <label>
          EMAIL
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          PASSWORD
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button  className="btn" onClick={handleLogin}>LOGIN</button>
        </div>
    )
}
export default Login;   

