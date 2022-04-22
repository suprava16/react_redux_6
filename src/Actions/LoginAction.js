import { SET_EMAIL } from "../Constant/LoginConstant"

export function setEmail(email){
return{
  type:SET_EMAIL,
  payload:email
}
}