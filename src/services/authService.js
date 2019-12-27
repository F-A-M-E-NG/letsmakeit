import http  from './httpService';
import jwtDecode from 'jwt-decode';
import { apiUrl } from '../config.json';
const apiEndpoint = `${apiUrl}/auth/login`;
const tokenKey = "token"

http.setJwt(getJwt())
export async function login(email, password) {

const { data } = await http.post(apiEndpoint, {email, password})
      const usertoken = data.data.token
      localStorage.setItem("token", usertoken)

}

export function loginWithJwt(){
      localStorage.setItem(tokenKey);
}
export function logout() {
localStorage.removeItem(tokenKey);
}
export function expiredLogout(){
      const user = getCurrentUser()
      if(user && user.exp){
      if(Date.now() >= user.exp * 1000) {
        localStorage.removeItem(tokenKey);
        window.location ="/"
      }
      }
}
export function getJwt(){
      return localStorage.getItem(tokenKey);
}
export function getCurrentUser(){
      try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
    } catch (ex) {
          return null;
     }
}
export default {
      login,
      loginWithJwt,
      logout,
      expiredLogout,
      getCurrentUser,
      getJwt
}