import http  from './httpService';
import { apiUrl } from '../config.json';
const apiEndpoint = `${apiUrl}/account`;

// function getUserUrl(id){
//  return `${apiEndpoint}/${id}` 
// }

export function CreateAccount(account){
return http.post(apiEndpoint, {
      accountType:account.accountType
})
}

// export function updatePassword(user){
// return http.put(apiEndpoint, {
//       password:user.password,
      
// })
// }


// export function saveUser(user) {
//   if(user._id){
//       const body = {...user};
//       delete body._id;
//       return http.put(getUserUrl(user._id), body)
//   }

//       return http.post(apiEndpoint, user)
// }