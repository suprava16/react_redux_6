import { SET_EMAIL,SET_PASSWORD } from "../Constant/LoginConstant"

export function setEmail(email){
return{
  type:SET_EMAIL,
  payload:email //payload=suprava@gmail.com
}
}

export function setPassword(password){
  return{
    type: SET_PASSWORD,
    payload: password 
  }
}