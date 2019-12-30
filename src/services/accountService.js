import http  from './httpService';
import axios from 'axios';
import { apiUrl } from '../config.json';
const apiEndpoint = `${apiUrl}/account`;
const apiEndpointfundacct = `${apiUrl}/transaction`;
const userAccounts = `${apiUrl}/account/u`
const singleAccount = `${apiUrl}/account/n`
const allTransforAnAccount = `${apiUrl}/transaction/a`
const transforWithdraw = `${apiUrl}/transaction/withdraw`


// Paystack AccountNumber resolve Config
const allbanksPaystack = "https://api.paystack.co/bank"
const accountNumResolve = `https://api.paystack.co/bank/resolve?account_number=`
const paystackKey = "sk_test_2304a0f9fe06f61b7f9314f6c0dcd4296b76a06a"




const headers = {
  Authorization: `Bearer ${paystackKey}`
 
}
// // Get All banks from Paystack
export function getAllPaystackBanks (){
  //  setJwt()   
 return  axios.get(`${allbanksPaystack}`,{headers})
  
}

// Resolve user Account Number from Paystac k
export function resovlePaystackBankAccountNum(accountNumber, bankCode){
  // setJwt()
  return axios.get(`${accountNumResolve}${accountNumber}&bank_code=${bankCode}`, {headers})
}
// End of Paystack accountNumber Resolve Config
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

// Credit the User Created Account
export function fundUserCreatedAccount(transaction){
return http.post(apiEndpointfundacct, {
            transactionType: "credit",
            amount:transaction.amount,
            accountNumber:transaction.accountNumber, //default
            reference: transaction.reference,
            channel: "Paystack"
      
})
}
// Withdraw from User existing Account, No endpoint for now
export function withdrawFromAccount(accountNumber, amount){
return http.post(transforWithdraw, {
            accountNumber: accountNumber,
            amount:amount
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

// Update or Save User Account Number from Profile Page
export function SaveUserAccountInfo(account){
  return http.put(`${apiUrl}/profile/bank`, account)
}
// Update or Save User Account Number from Profile Page
export function getUserAccountInfo(account){
  return http.get(`${apiUrl}/profile/bank`, account)
}
