import React, { Component } from 'react';
class Plan extends Component {
      state = {  }
      render() { 
            return ( 
       <React.Fragment>
 <div class="section-empty">
    <div class="container content">
      <div class="d-flex">
        <h2><span id="accountNumber"></span><br/><small><span id="accountType"></span></small></h2>
      </div>
      <hr class="space m"/>
      <div class="alert" id="account-alert"></div>
      <hr class="space m"/>
      <div class="row">
        <div class="col-md-4">
          <div class="advs-box advs-box-multiple shadow-1">
            <div class="advs-box-content">
              <h5>Account Balance</h5>
              <h2 id="accountBalance"></h2>
              <button type="button" id="fundAccount" class="btn btn-primary loaded" disabled>Fund Account</button>
              <button class="btn btn-secondary loaded" disabled>Withdraw</button>
              <div style="padding-top: 10px;">
                <form id="fundForm" class="form-box form-ajax">
                  <div class="form-group">
                    <label for="accountType">Amount</label>
                    <input type="number" name="amount" id="amount" class="form-control form-value" placeholder="Amount"
                      required />
                  </div>
                  <input type="submit" value="Proceed" class="btn" id="fund-button"/>
                  <button type="button" class="btn" id="cancel-button">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="space"/>
      <h3>Transactions</h3>
      <hr class="space m" />
      <table class="table">
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

  <div class="modal fade" id="fundAccount" tabindex="-1" role="dialog" aria-labelledby="fundAccountLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="fundAccountLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  </React.Fragment>
 )
      }
}
 
export default Plan;