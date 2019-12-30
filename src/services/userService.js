import http  from './httpService';
import { apiUrl } from '../config.json';
const apiEndpoint = `${apiUrl}/auth/register`;
const tokenKey = "token"

// function getUserUrl(id){
//  return `${apiEndpoint}/${id}` 
// }



//  function getJwt(){
//       const b = localStorage.getItem(tokenKey);
// http.setJwt(b)
//       console.log(b)
// }
// getJwt()
export function register(user){
return http.post(apiEndpoint, {
      email:user.email,
      password:user.password,
      firstname:user.firstname,
      lastname:user.lastname,
})
}

export function updatePassword(user){
return http.put(apiEndpoint, {
      password:user.password,
      
})
}

// Update User Contact Information
export function updateContactInfo(con) {
      if(con._id){
      const body = {...con};
      delete body._id
      return http.put(`${apiUrl}/profile/contact`, body)
      }
}
// Get User Contact Information
export function userContactInfo() {
      return http.get(`${apiUrl}/profile/contact`)
}