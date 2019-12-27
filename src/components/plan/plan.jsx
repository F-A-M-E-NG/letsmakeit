import React, { Component } from 'react';
import { RotateSpinner } from 'react-spinners-kit'
import PaystackButton from 'react-paystack';
import { default as NumberFormat } from 'react-number-format';
import { Button } from 'reactstrap'
import { getSingleAccount, getAllTransactionForAnAccount, fundUserCreatedAccount } from '../../services/accountService'
import { Redirect } from 'react-router-dom';
import moment from 'moment'
import auth from '../../services/authService';
import { Container } from 'reactstrap'
class Plan extends Component {
      state = {
        data:{amount:""},
        accountNumber:"",
        accountBalance:"0.00",
        accountInfo:{},
        transactions:{},
        toggleFundAccount:false,
        toggleWithdrawAccount:false,
        loading:true,

        // Paystack details
        key: "pk_test_f43a22879c6fc019c06964197aeab3905fd3b64f", //PAYSTACK PUBLIC KEY
    		email: "",  // customer email
        lastName:"",
        _id:"",
        firstName:"",
    		amount:"", //equals NGN100,
       }

       // Paystack methods

        callback = async (response) => {
    		
        if(response.status ==="success"){
          let newTransaction ={
            accountNumber:this.state.accountNumber,
            reference:response.reference,
            amount:this.state.amount,

          }
        
          try {
          let {data} = await fundUserCreatedAccount(newTransaction)
    
          this.setState({msg:`${data.message}, kindly wait for approval of your transaction. thank you..`, error:null, amount:""})
          }
          catch(ex){
            if(ex.response && ex.response.data){
              console.log(ex.response.data)
          this.setState({error:`${ex.response.data.message},`, msg:null})
            }else{
              this.setState({error: "Something failed please try again later"})
              console.log("Something failed")

            }
          }
        } // card charged successfully, get reference here
    	}
 
    	close = () => {
    		console.log("Payment closed");
        this.setState({error:"Transaction Cancelled", msg:null, amount:""})
    	}
 
    	getReference = () => {
    		//you can put any unique reference implementation code here
    		let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";
 
    		for( let i=0; i < 15; i++ )
    			text += possible.charAt(Math.floor(Math.random() * possible.length));
 
    		return text;
    	}


       // End of paystack methods
     getAccountDetails = async () => {
        const accountNumber = window.location.href.split("/")
       
       try
       {
        const {data} = await getSingleAccount(accountNumber[5])
        this.setState({accountInfo:data})
        console.log(data)
       }
       catch(ex){
        if(ex.response && ex.response.data){
          console.log(ex.response.data)
        }else{
          console.log("Something failed, try again later")
        }
       }
     }
     getTransactionDetails = async () => {
        const accountNumber = window.location.href.split("/")
       try
       {
          const {data} = await getAllTransactionForAnAccount(accountNumber[5])
          const creditTrans = data.data.filter(function(transaction) {
                return transaction.transactionType === "credit";
              });
          const debitTrans = data.data.filter(function(transaction) {
                return transaction.transactionType === "debit";
              });
          const alldebitTransactions =debitTrans.map(debit => debit.amount)
          const totalDebitTrans = alldebitTransactions.reduce((alldebit, last )=> alldebit + last)
          const allcreditTransactions = creditTrans.map(credit => credit.amount)
          const totalCreditTrans = allcreditTransactions.reduce((allcredit, last )=> allcredit + last)
          const accountBalance = totalCreditTrans - totalDebitTrans;
        this.setState({transactions:data, accountBalance, loading:false})
       }
       catch(ex){
        if(ex.response && ex.response.data){
          console.log(ex.response.data)
        this.setState({loading:false})
        }else{
          console.log("Something failed, try again later")
        this.setState({loading:false})
        }
       }

     }
       getAccountNumber = () => {
        const accountNumber = window.location.href.split("/")
        this.setState({accountNumber:accountNumber[5]})
       }
      componentDidMount() {
        this.getAccountNumber()
        this.getAccountDetails()
        this.getTransactionDetails()
        let user = auth.getCurrentUser()
        if(user){
        this.setState({email:user.email, lastName:user.lastName, firstName:user.firstName, _id:user._id})
        }
        auth.expiredLogout()
         
      }
      openfundAccForm =()=>{
        this.setState({toggleFundAccount:true, toggleWithdrawAccount:false})
      }
      
      closefundAccForm =()=>{
        this.setState({toggleFundAccount:false, toggleWithdrawAccount:false, amount:""})
      }
      openwithdrawForm =()=>{
        this.setState({toggleFundAccount:false, toggleWithdrawAccount:true})
      }
      
      closewithdrawAccForm =()=>{
        this.setState({toggleFundAccount:false,toggleWithdrawAccount:false, amount:""})
      }

      handleAmount = event =>{
        let das = event.target.value
        this.setState({amount:das})
        console.log(das)
         
}
      
      render() { 
       
        const {data:accountInfo} = this.state.accountInfo
        const {toggleFundAccount, toggleWithdrawAccount} = this.state;
       
        if(this.state.accountNumber.length > 10) return <Redirect to="/user/dashboard"/>;
        if (!auth.getCurrentUser()) return <Redirect to="/login"/>;
        let contents=(
          <div>
            <div class="section">
               <div class="container">
                <div>
                  <hr class="space m"/>
                  <div class="d-flex">
                  </div>
                {accountInfo && <div>
                <h2><span id="accountNumber"></span><br/><small><span id="accountType">{this.state.accountNumber}</span></small></h2>
                <h3 class="mr-t200" id="account-alert">{accountInfo.accountType}</h3>
                  <hr class="space m"/>
                  <div class="row">
                    <div class="col-md-5">
                      <div class="advs-box advs-box-multiple shadow-1">
                        {this.state.error && <div className="container alert alert-danger">{this.state.error}</div>}
                        {this.state.msg && <div className="container alert alert-success">{this.state.msg}</div>}
                        <div class="advs-box-content">
                          <h5>Account Balance</h5>
                          <h2 id="accountBalance"><NumberFormat value={this.state.accountBalance} displayType={'text'} isNumericString={true} thousandSeparator={true} prefix={'₦'} /></h2>
                          <div className="row">
                          <button type="button" id="fundAccount"  className="btn1" onClick={this.openfundAccForm} disabled={toggleFundAccount}>Fund Account</button>
                          <button className="btn1 mr-l20" onClick={this.openwithdrawForm} disabled={toggleWithdrawAccount}>Withdraw</button>
                          </div>
                          {toggleFundAccount && <div>
                            <form id="fundForm" className="form-box form-ajax">
                              <h3 className="mr-t20">Fund your Account</h3>
                              <div className="form-group">
                                <label for="accountType">Amount</label>
                                <input type="number" name="amount" id="amount" className="form-control form-value" placeholder="Amount"
                                onChange={this.handleAmount} value={this.state.amount}  required />
                              </div>
                          </form>
              <PaystackButton
                text={<input type="button" value="Proceed" className="btn1" disabled={this.state.amount < 500}/>}
                class="payButton"
                callback={this.callback}
                close={this.close}
                disabled={false} 
                embed={false} 
                reference={this.getReference()}
                metadata={
                           { custom_fields:
                          [
                            {display_name: "Account Type",
                            variable_name: "account_type",
                            value: this.state.data.accountType
                            },
                            {display_name:"Account Name",
                            variable_name:"account_name",
                            value: this.state.firstName+ " " + this.state.lastName
                            },
                             {
                            display_name: "User ID",
                            variable_name: "user_id",
                            value: this.state._id
                          }
                            ]
                         }

                          }
                email={this.state.email}
                amount={this.state.amount * 100}
                paystackkey={this.state.key}
                tag="button"
              />
           
      
                               
                              <Button color="danger" size="md" className="btn mr-l20" id="cancel-button" onClick={this.closefundAccForm}>Cancel</Button>
                            
                          </div>}
                          {toggleWithdrawAccount && <div>
                            <form id="fundForm" className="form-box form-ajax">
                              <h3 className="mr-t20">Withdraw from your Account</h3>
                              <div className="form-group">
                                <label for="accountType">Amount</label>
                                <input type="number" name="amount" id="amount" className="form-control form-value" placeholder="Amount"
                                onChange={this.handleAmount} value={this.state.amount}  required />
                              </div>
              
                          </form>
                         <input type="button" value="Proceed" className="btn1" disabled={this.state.amount < 500}/>
               
           
      
                               
                              <Button color="danger" size="md" className="btn mr-l20" id="cancel-button" onClick={this.closewithdrawAccForm}>Cancel</Button>
                            
                          </div>}
                        </div>
                      </div>
                    </div>
                  </div>
              </div>}
                  <hr className="space"/>
                  <h3>Transactions</h3>
                  <hr className="space m" />
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Channel</th>
                      </tr>
                    </thead>
                    <tbody id="transactions">
                      {this.state.transactions.data ? this.state.transactions.data.map(transaction =>
                      <tr>
                        <td>{moment (transaction.createdAt).format('ll')}</td>
                        <td>{transaction.transactionType}</td>
                        <td><NumberFormat value={transaction.amount} displayType={'text'} thousandSeparator={true} prefix={'₦'} /></td>
                        <td>{transaction.channel}</td>
                      </tr>):<div style={{marginLeft:"150px", marginTop:"20px"}}>
                        <RotateSpinner
                            size={50}
                            color="blue"
                            loading={this.state.loading}
                        /></div>}
                    </tbody>
                  </table>
                </div>
              
              </div>
              </div>

              <div className="modal fade" id="fundAccount" tabindex="-1" role="dialog" aria-labelledby="fundAccountLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="fundAccountLabel">Modal title</h5>
                      <button type="button" className="close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      ...
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
  </div>
        )
            return ( 
       <div id="tokens" className="wd_scroll">
        <section className="tokens-area section">
          <Container>
            { contents}
          </Container>
        </section>
      </div>
 )
      }
}
 
export default Plan;