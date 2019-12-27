import http  from './httpService';
import { apiUrl } from '../config.json';
const apiEndpoint = `${apiUrl}/auth/register`;

// function getUserUrl(id){
//  return `${apiEndpoint}/${id}` 
// }

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
export function updateContactInfo(contact) {
      return http.put(`${apiUrl}/profile/contact`, contact)
}
// Get User Contact Information
export function userContactInfo() {
      return http.get(`${apiUrl}/profile/contact`)
}