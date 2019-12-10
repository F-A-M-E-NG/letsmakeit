import axios from "axios";
import logger from "./logService";
// import { toast } from "react-toastify";


axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    // toast.error("Please ensure you are offline.");
    console.error("Please ensure you are offline.");
  }

  return Promise.reject(error);
});

function setJwt(usertoken){
axios.defaults.headers.common["Authorization"] =`Bearer ${usertoken}`;

}
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
