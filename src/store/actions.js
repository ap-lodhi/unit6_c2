import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes"
import axios from "axios"
import { useNavigate } from "react-router-dom";

export  const loginLoading = ()=>{
    return{
        type: LOGIN_LOADING
    }
}

export  const loginSuccess = (payload)=>{
    return{
        type: LOGIN_SUCCESS,
        payload
    }
}
export  const loginError = ()=>{
    return{
        type: LOGIN_ERROR 
    }
}

export   const login =(email ,password)  =>(dispatch)=>{
    const navigate = useNavigate();
    const payload = { email, password };
    // if(email === "" || password=== ""){
    //   return alert("please fill the details ")
    // }
    dispatch(loginLoading())
    axios({
        method:"post",
        url:"https://reqres.in/api/login",
        data:{
            email:email,
            password:password
        }
    }) .then((res) => {
        if (res.data.token) {
          // alert("login succ")
       
       dispatch(loginSuccess(res.data.token))
          navigate("/");
        }
      })
      .catch(() => {
        dispatch(loginError())
      });
    
      
     
}