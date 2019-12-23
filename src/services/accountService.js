import http  from './httpService';
import axios from 'axios';
import logger from "./logService";
import { apiUrl } from '../config.json';
const apiEndpoint = `${apiUrl}/account`;
const apiEndpointfundacct = `${apiUrl}/transaction`;
const userAccounts = `${apiUrl}/account/u`
const singleAccount = `${apiUrl}/account/n`
const allTransforAnAccount = `${apiUrl}/transaction/a`
const allbanksPaystack = "https://api.paystack.co/bank"
const accountNumResolve = `https://api.paystack.co/bank/resolve?account_number=`
const paystackKey = "sk_test_2304a0f9fe06f61b7f9314f6c0dcd4296b76a06a"


axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    // toast.error("Please ensure you are offline.");
    console.error("Please ensure you are not offline.");
  }

  return Promise.reject(error);
});
function setJwt(){
axios.defaults.headers.common["authorization"] =`Bearer ${paystackKey}`;

}
export function getAllPaystackBanks (){
   setJwt()   
 return  axios.get(`${allbanksPaystack}`)
  
}

export function CreateAccount(account){
return http.post(apiEndpoint, {
      accountType:account.accountType
})
}

export function fundAccount(transaction){
return http.post(apiEndpointfundacct, {
            transactionType: "credit",
            amount:transaction.amount,
            accountNumber:"2020202020", //default
            reference: transaction.reference,
            channel: "Paystack"
      
})
}

// Credit the User Account
export function fundUserCreatedAccount(transaction){
return http.post(apiEndpointfundacct, {
            transactionType: "credit",
            amount:transaction.amount,
            accountNumber:transaction.accountNumber, //default
            reference: transaction.reference,
            channel: "Paystack"
      
})
}
// Withdraw from an Account
export function withdrawFromAccount(transaction){
return http.post(apiEndpointfundacct, {
            transactionType: "credit",
            amount:transaction.amount,
            accountNumber:transaction, //default
            reference: transaction.reference,
            channel: "Paystack"
      
})
}

// List All Accounts by User
export function getAllAccountByActiveUser(userid) {
      return http.get(`${userAccounts}/${userid}`)
  }

// Return single Account by a User
export function getSingleAccount(accountNumber){
      return http.get(`${singleAccount}/${accountNumber}`)
}    

//Get all transactions for an account
export function getAllTransactionForAnAccount(accountNumber){
      return http.get(`${allTransforAnAccount}/${accountNumber}`)
}

//Get single transaction details
export function SingleTransactionDetails(transactionId){
      return http.get(`${apiEndpointfundacct}/${transactionId}`)
}

// Get All banks from Paystack
export function resovlePaystackBankAccountNum(accountNumber, bankCode){
  setJwt()
  return axios.get(`${accountNumResolve}${accountNumber}&bank_code=${bankCode}`)
}