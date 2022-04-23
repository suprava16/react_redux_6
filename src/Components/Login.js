import React from 'react'
import {useDispatch,useSelector} from "react"
import {setEmail,setPassword} from "../Actions/LoginAction"

function Login() {
const dispatch=useDispatch()
const mydata=useSelector((store)=>store.LoginReducer)
console.log(mydata)

const handleEmail=(event)=>{
  dispatch(setEmail(event.target.value)) //suprava@gmail.com
}

const handlePassword=(event)=>{
  dispatch(setPassword(event.target.value))
}
  return (
    <div>
      <input type="text"  onChange={handleEmail}/> 
      <input type="password" onChange={handlePassword}/>
      <button>LOGIN</button>
    </div>
  )
}

export default Login