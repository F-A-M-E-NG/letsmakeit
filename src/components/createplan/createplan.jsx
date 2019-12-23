import React from 'react';
import PaystackButton from 'react-paystack';

import DynamicForm from '../../common/form'
import Joi from 'joi-browser'
import { Redirect } from 'react-router-dom'
import auth from '../../services/authService'
import {CreateAccount, fundAccount } from '../../services/accountService'
import {Link} from 'react-router-dom'
import products from '../details/content'
import {Row, Form, FormGroup, Label, Input } from 'reactstrap';
class Createpan extends DynamicForm {
      state = {
        data:{accountType:""}, 
        product:"",
        mgs:null,
        error:null,
        accountSuccess:false,
        isLoading:false,
        
        key: "pk_test_f43a22879c6fc019c06964197aeab3905fd3b64f", //PAYSTACK PUBLIC KEY
    		email: "",  // customer email
        lastName:"",
        _id:"",
        firstName:"",
    		amount: 0, //equals NGN100,
        amountrequired:false,
        toDashboard:false
       }

      schema = {
    accountType: Joi.string()
      .required()
      .label("Account Type")
  };
callback = async (response) => {
    		console.log(response);
        if(response.status ==="success"){
          let newTransaction ={
            reference:response.reference,
            amount:this.state.amount,

          }

          try {
          let {data} = await fundAccount(newTransaction)
    
          this.setState({msg:`${data.message}, we will get back to you`, error:null})
          setTimeout(()=>{
            this.setState({toDashboard:true})
          },3000)
          }
          catch(ex){
            if(ex.response && ex.response.data){
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
        this.setState({error:"Transaction Cancelled", msg:null})
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
    this.setState({msg: null, error:ex.response.data.message, isLoading:false, accountSuccess:false})
     console.log(ex.response.data)

      }else{
    this.setState({msg: null, error:"Pls check your internet connection", isLoading:false, accountSuccess:false})
        console.log("")
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
      this.setState({data, email:user.email, lastName:user.lastName, firstName:user.firstName, _id:user._id})
    })
        console.log(produc)
       
      }
      
      render() { 
        // const product = products.filter(product => product.name ===this.state.product ? this.state.product:"" )
        console.log(this.state.data)
        if(!auth.getCurrentUser()) return <Redirect to="/login"/>
        if(this.state.toDashboard) return <Redirect to="/user/dashboard"/>

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
          {this.state.error&& <div className="alert alert-danger" id="account-alert">{this.state.error}</div>}
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