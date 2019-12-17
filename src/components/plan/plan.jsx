import React, { Component } from 'react';
import { Button } from 'reactstrap'
import { getSingleAccount, getAllTransactionForAnAccount } from '../../services/accountService'
import { Redirect } from 'react-router-dom';
import moment from 'moment'
import auth from '../../services/authService';
import { Container } from 'reactstrap'
class Plan extends Component {
      state = { 
        accountNumber:"",
        accountInfo:{},
        transactions:{},
        toggleFundAccount:false
       }
     getAccountDetails = async () => {
        const accountNumber = window.location.href.split("/")
       
       try
       {
        const {data} = await getSingleAccount(accountNumber[5])
        this.setState({accountInfo:data})
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
        this.setState({transactions:data})
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
       getAccountNumber = () => {
        const accountNumber = window.location.href.split("/")
        this.setState({accountNumber:accountNumber[5]})
        console.log(accountNumber[5])
       }
      componentDidMount() {
        this.getAccountNumber()
        this.getAccountDetails()
        this.getTransactionDetails()
      }
      openfundAccForm =()=>{
        this.setState({toggleFundAccount:true})
      }
      
      closefundAccForm =()=>{
        this.setState({toggleFundAccount:false})
      }
      
      render() { 
        console.log(this.state.transactions)
        const {data:accountInfo} = this.state.accountInfo
        const {toggleFundAccount} = this.state;
        
        if(this.state.accountNumber.length > 10) return <Redirect to="/user/dashboard"/>;
        if (!auth.getCurrentUser()) return <Redirect to="/login"/>;
        let contents=(
          <div>
            <div class="section">
               <div class="container content">
                <div>
                  <div class="d-flex">
                    <h2><span id="accountNumber"></span><br/><small><span id="accountType">{this.state.accountNumber}</span></small></h2>
                  </div>
                {accountInfo && <div>
                  <hr class="space m"/>
                  <div class="alert" id="account-alert">{accountInfo.accountType}</div>
                  <hr class="space m"/>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="advs-box advs-box-multiple shadow-1">
                        <div class="advs-box-content">
                          <h5>Account Balance</h5>
                          <h2 id="accountBalance">3000</h2>
                          <button type="button" id="fundAccount"  className="btn1 btn-primary" onClick={this.openfundAccForm} disabled={toggleFundAccount}>Fund Account</button>
                          <button className="btn1 btn-secondary loaded mr-l20" disabled>Withdraw</button>
                          {toggleFundAccount && <div>
                            <form id="fundForm" className="form-box form-ajax">
                              <div className="form-group">
                                <label for="accountType">Amount</label>
                                <input type="number" name="amount" id="amount" className="form-control form-value" placeholder="Amount"
                                  required />
                              </div>
                              <input type="submit" value="Proceed" className="btn1" id="fund-button"/>
                               
                              <Button color="danger" size="md" className="btn mr-l20" id="cancel-button" onClick={this.closefundAccForm}>Cancel</Button>
                            </form>
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
                        <td>{moment(transaction.createdAt).format('L')}</td>
                        <td>{transaction.transactionType}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.channel}</td>
                      </tr>): null}
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