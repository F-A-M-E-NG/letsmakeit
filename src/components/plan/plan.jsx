import React, { Component } from 'react';
class Plan extends Component {
      state = {  }
      render() { 
            return ( 
 <div className="section-empty">
    <div className="container content">
      <div className="d-flex">
        <h2>
       <span >Account number populate</span>
        <br/>
        <small>
        <span id="accountType">
         </span>Account Type populate</small>
         </h2>
      </div>

      <hr className="space m"/>
      <div className="alert" id="account-alert"></div>
      <hr className="space m"/>
      <div className="row">
        <div className="col-md-4">
          <div className="advs-box advs-box-multiple shadow-1">
            <div className="advs-box-content">
              <h5>Account Balance</h5>
              <h2 id="accountBalance"></h2>
              <button type="button" id="fundAccount" className="btn btn-primary loaded" disabled>Fund Account</button>
              <button className="btn btn-secondary loaded" disabled>Withdraw</button>
              <div style="padding-top: 10px;">
                <form id="fundForm" className="form-box form-ajax">
                  <div className="form-group">
                    <label for="accountType">Amount</label>
                    <input type="number" name="amount" id="amount" className="form-control form-value" placeholder="Amount"
                      required/>
                  </div>
                  <input type="submit" value="Proceed" className="btn" id="fund-button"/>
                  <button type="button" className="btn" id="cancel-button">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="space"/>
      <h3>Transactions</h3>
      <hr className="space m"/>
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
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          ...
        </div>
        <div className="modal-footer">
          <button type="button" className="btn1">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
        );
      }
}
 
export default Plan;