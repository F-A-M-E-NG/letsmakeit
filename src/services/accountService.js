import http  from './httpService';
import { apiUrl } from '../config.json';
const apiEndpoint = `${apiUrl}/account`;
const apiEndpointfundacct = `${apiUrl}/transaction`;
const userAccounts = `${apiUrl}/account/u`
const singleAccount = `${apiUrl}/account/n`
const allTransforAnAccount = `${apiUrl}/transaction/a`

// function getUserUrl(id){
//  return `${apiEndpoint}/${id}` 
// }

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
export function fundUserCreatedAccount(transaction){
return http.post(apiEndpointfundacct, {
            transactionType: "credit",
            amount:transaction.amount,
            accountNumber:transaction.accountNumber, //default
            reference: transaction.reference,
            channel: "Paystack"
      
})
}
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
