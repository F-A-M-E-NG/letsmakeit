import React from 'react';
import PaystackButton from 'react-paystack';

import DynamicForm from '../../common/form'
import Joi from 'joi-browser'
import { Redirect } from 'react-router-dom'
import auth from '../../services/authService'
import {CreateAccount} from '../../services/accountService'
import {Link} from 'react-router-dom'
import products from '../details/content'
import {Row, Form, FormGroup, Label, Input } from 'reactstrap';
class Createpan extends DynamicForm {
      state = {
        data:{accountType:""}, 
        product:"",
        mgs:null,
        accountSuccess:false,
        isLoading:false,
        
        key: "pk_test_f43a22879c6fc019c06964197aeab3905fd3b64f", //PAYSTACK PUBLIC KEY
    		email: "",  // customer email
    		amount: 0, //equals NGN100,
        amountrequired:false
       }

      schema = {
    accountType: Joi.string()
      .required()
      .label("Account Type")
  };
callback = (response) => {
    		console.log(response); // card charged successfully, get reference here
    	}
 
    	close = () => {
    		console.log("Payment closed");
    	}
 
    	getReference = () => {
    		//you can put any unique reference implementation code here
    		let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";
 
    		for( let i=0; i < 15; i++ )
    			text += possible.charAt(Math.floor(Math.random() * possible.length));
 
    		return text;
    	}
 

  doSubmit = async () => {
    this.setState({isLoading:true})
    try {
    let {data} = await CreateAccount(this.state.data)
    this.setState({msg: data.message, isLoading:false, accountSuccess:true})
    //  console.log(data)
    }
    catch(ex){
      if(ex.response && ex.response.data){
    this.setState({msg: null, error:ex.response.data.message, isLoading:false, accountSuccess:true})
     console.log(ex.response.data)

      }else{
        console.log("Pls check your internet connection")
      }
    }
    console.log("Acccount submitted")
  }
handleAmount = event =>{
 let das = event.target.value
 if(das.length <= 1){
   this.setState({amountrequired:true})
   return
 }else{
   this.setState({amount:das, amountrequired:false})
 }
 console.log(das)
}
      componentDidMount() {
    const AccountType = window.location.href.split("/")
    console.log(products)
       let produc = products.filter(product => product.name === AccountType[4] )
		this.setState({ product:AccountType[4]})
    produc.map(prod => {
        const {data} = {...this.state}
		 data.accountType =prod.value
    let user = auth.getCurrentUser()
      this.setState({data, email:user.email})
    })
        console.log(produc)
       
      }
      
      render() { 
        // const product = products.filter(product => product.name ===this.state.product ? this.state.product:"" )
        console.log(this.state.data)
        if(!auth.getCurrentUser()) return <Redirect to="/login"/>


        let createAcount = (
          <div>
            {this.state.msg && <div className="alert alert-success">{this.state.msg}</div>}
          <div id="create-section">
            <h2>Create Account</h2>
            <Form  onSubmit={this.handleSubmit}  className="form-box form-ajax" id="create-form">
              <FormGroup>
                <Label for="accountType">Account Type</Label>
                <Input type="text" name="accountType" id="accountType"  value={this.state.data.accountType} disabled />
              </FormGroup>
              <Input  type="submit" value="Create Account" className="btn1"/>
            </Form>
          </div>
          </div>
        );

        let fundAccount = ( 
          <div>
          {this.state.msg && <div className="alert alert-success" id="account-alert">{this.state.msg}</div>}
          <div id="fund-section" >
            <h2 className="mr-t25">Fund Account</h2>
            <Form className="form-box form-ajax" id="fund-form">
              <FormGroup>
                <Label for="accountType">Amount</Label>
                <Input type="number" name="amount" id="amount" onChange={this.handleAmount} placeholder="Amount"/>
                 {this.state.amountrequired && <div className="alert alert-danger">Amount is required</div>}
              </FormGroup>
            </Form>
               <div>
            <p>
              <PaystackButton
                text={<p className="btn1">Fund Account</p>}
                class="payButton"
                callback={this.callback}
                close={this.close}
                disabled={false} 
                embed={false} 
                reference={this.getReference()}
                email={this.state.email}
                amount={this.state.amount * 100}
                paystackkey={this.state.key}
                tag="button"
              />
            </p>
          </div>
              {/* <Input type="submit" className="btn1" value="Fund Account" id="fund-button"/> */}
              <center><Link style={{color:"blue"}} to="/user/dashboard"><small>SKIP</small></Link></center>
          </div>
          </div>
        )
            return ( 
<div className="section-empty" >
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
    <div className="container content mr-b50">
      <hr className="space m"/>
      <Row style={{ display:"flex",
                    flexWrap:"wrap",
                    justifyContent:"center"}}>
        <div className="col-md-6 boxed-inverse shadow-1">
        { ! this.state.accountSuccess && createAcount}
          {this.state.accountSuccess && fundAccount}
         
        </div>
      </Row>
      </div>
  
  </div>
             );
      }
}
 
export default Createpan;