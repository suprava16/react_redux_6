import React from 'react'
import {useDispatch,useSelector} from "redux"
import {setEmail} from "../Actions/LoginAction"

function Login() {
const dispatch=useDispatch()

const handleEmail=(event)=>{
  dispatch(setEmail(event.target.value))
}
  return (
    <div>
      <input type="text"  onChange={handleEmail}/>
      <input type="password"/>
      <button>LOGIN</button>
    </div>
  )
}

export default Login