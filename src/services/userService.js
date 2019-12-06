import http  from './httpService';
import { apiUrl } from '../config.json';
const apiEndpoint = `${apiUrl}/users`;

function getUserUrl(id){
 return `${apiEndpoint}/${id}` 
}

export function register(user){
return http.post(apiEndpoint, {
      email:user.email,
      password:user.password,
      firstname:user.firstname,
      lastname:user.lastname,
      phone:user.phone,
      user_cat:user.user_cat,
})
}

export function updatePassword(user){
return http.put(apiEndpoint, {
      password:user.password,
      
})
}


export function saveUser(user) {
  if(user._id){
      const body = {...user};
      delete body._id;
      return http.put(getUserUrl(user._id), body)
  }

      return http.post(apiEndpoint, user)
}