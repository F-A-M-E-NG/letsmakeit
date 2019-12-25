import React from 'react';
import { Redirect } from 'react-router-dom';
import { RotateSpinner } from 'react-spinners-kit'
import Joi from 'joi-browser'

import DynamicForm from '../../common/form';
import auth from '../../services/authService';
import Contactinfo from './contactinfo';
import { getAllPaystackBanks, resovlePaystackBankAccountNum, SaveUserAccountInfo }from '../../services/accountService';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container, Card, CardBody} from 'reactstrap';
class Profile extends DynamicForm {
      state = { 
        data:{
          firstName:"",
          lastName:"",
          email:"",
          phoneNumber:""
        },
        savebankAccount:{accountName:"", accountNumber:""},
        errors:{},
        isOpen:false, 
        banks:[],
        checkAccount:{account_Number:"", bank_code:""},
        accountHolder:"",
        loading:false,
        isLoading:false
       }

     schema = {
    firstName: Joi.string()
      .required()
      .max(50)
      .label("First Name"),
    lastName: Joi.string()
      .required().max(50)
      .label("Last Name"),
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
     phoneNumber: Joi.string()
      .required()
      .min(11)
      .max(14)
      .label("Phone Number")
  };


    handleOpenform =() => {
            this.setState({isOpen:true})
          }
    handleCloseform =() => {
            const {checkAccount} =this.state
            checkAccount.account_Number=""
            checkAccount.bank_code =""
            this.setState({isOpen:false, checkAccount, accountHolder:""})
          }
    checkBankName = async() => {
      
        try {
            const {data} = await resovlePaystackBankAccountNum(this.state.checkAccount.account_Number, this.state.checkAccount.bank_code)
            const {savebankAccount} = this.state
                savebankAccount.accountName= data.data.account_name
                savebankAccount.accountNumber = this.state.checkAccount.account_Number
            this.setState({accountHolder:data.data.account_name, savebankAccount})
      }
      catch(ex){
        if(ex.response && ex.response.data){
          console.log(ex.response.data.message)
          this.setState({accountHolder:""})
        }
        else{
          console.log("Something went wrong try again")
        }
      }
      }
      

    handleAccountNumResolve = event =>{
      const {checkAccount }= this.state
      checkAccount[event.target.name] = event.target.value;
     this.setState({checkAccount})
    }
addAccountNumber = () => {
  
 this.saveAcc()
}

saveAcc = async()=>{
  if(this.state.accountHolder.length > 5){ 
   this.setState({isLoading:true})
  try{
    const {data} = await SaveUserAccountInfo(this.state.savebankAccount)
    this.setState({msg:data.message, error:null, isLoading:false})
    console.log(data)
  }catch(ex){
     if(ex.response && ex.response.data){
          this.setState({msg:null, error:ex.response.data, isloading:false})
          console.log(ex.response.data.message)
        }else{
          this.setState({error:"Something went wrong, try again later",isLoading:false, msg:null})
        }

  }
 }
}
    doSubmit = async () => {
      // try {
      //   const {data} = await u
      // }
      // catch(ex){
      //   if(ex.response && ex.response.data){
      //     console.log(ex.response.data)
      //   }
      // }
      // console.log("Profile Data updated")
    }
      async componentDidMount() {
        const {data:userProfile} = this.state
          
         const user = auth.getCurrentUser()
         if(user){
         userProfile.firstName = user.firstName
         userProfile.lastName = user.lastName
         userProfile.email = user.email
         userProfile.phoneNumber=user.phoneNumber
         const {data} = await getAllPaystackBanks()
         this.setState({data:userProfile, banks:data.data })
         }
          auth.expiredLogout()
        
       }
       
      render() {
         if(this.state.checkAccount.account_Number.length ===9 && this.state.accountHolder==="" || this.state.checkAccount.account_Number.length ===10 && this.state.accountHolder==="" ){
           this.checkBankName()
         }
         
         console.log(this.state.savebankAccount)
        
         if (!auth.getCurrentUser()) return <Redirect to="/login"/>;
        const {isOpen, loading, isLoading } = this.state;
            return (
              <Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

 <div className="section-empty">
    <div className="container content">
      <div className="d-flex">
        <h2>My Profile</h2>
      </div>
      <hr className="space m" />
      <div className="advs-box advs-box-multiple shadow-1"/>
        <Card body>
            <CardBody>

        <div className="tokens">
          <h4>Basic Profile</h4>
          <Form onSubmit={this.handleSubmit} className="form-box form-ajax token-body" id="basic-form">
          <Row>  
              <Col md={6}>
                {this.renderInput("firstName", "First Name")}
              </Col>
                <Col md={6}>
                  {this.renderInput("lastName", "Last Name")}
              </Col> 
            </Row>
            <Row>  
                <Col md={6}>
                 {this.renderInput("email", "Email", "email")}
                </Col>
                  <Col md={6}>
                    {this.renderInput("phoneNumber", "Phone Number", "number")}
                </Col> 
              </Row>
            <Button className="btn1" size="md" type="submit" style={{width:"200px"}} disabled={loading}>
              {loading &&  <div><RotateSpinner
                size={20}
                color="#ffffff"
                loading={loading}
            />
            </div>
            }

              {!loading && "Update Profile"}
              </Button>
          </Form>
        </div>
            </CardBody>
      </Card>
        

        <hr className="space" />
      <div className="advs-box advs-box-multiple shadow-1">
        <Contactinfo />
         <hr className="space"/>
      <div className="advs-box advs-box-multiple shadow-1">
        <div className="advs-box-content">
          <div style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"space-between"
          }}>
            <h4>Bank Details</h4>
             <Button onClick={this.handleOpenform} disabled={isOpen} className="btn1 top-right" size="md">Add New</Button>
          </div>
          {isOpen && 
          <Form onSubmit={this.addAccountNumber} className="form-box form-ajax">
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="bank_code">Bank</Label>
                  <Input onChange={this.handleAccountNumResolve} type="select"  name="bank_code" id="bank_code">
                    <option value="" disabled selected hidden>Bank</option>
                    {this.state.banks ? this.state.banks.map(bank=><option value={bank.code}>{bank.name}</option>
                    ):""}
                  </Input>
                </FormGroup>

              </Col>
              <Col md={6}>
                 <FormGroup>
                    <Label for="account_Number">Account Number</Label>
                    <Input onChange={this.handleAccountNumResolve}  type="number" name="account_Number" id="account_Number" placeholder="Account Number" />
                  </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col  md={12}>
                  <FormGroup>
                    <Label for="accountName">Account Name</Label>
                    <Input  type="text" name="accountName" id="accountName" value={this.state.accountHolder} placeholder="Account Name" disabled required/>
                  </FormGroup>
              </Col>
            </Row>
            <Button className="btn1" size="md" type="submit" disabled={isLoading}>
             
              {isLoading && <RotateSpinner
                size={20}
                color="#ffffff"
                loading={isLoading}
            />}
            {!isLoading && <p>Save Account Number</p>}
            
              </Button>
            <Button onClick={this.handleCloseform} color="danger" size="md" className="mr-l20">Cancel</Button>
          </Form>}
        </div>
       
        
      </div>
      </div>
      </div>
      </div> 
      <br></br>
      <br></br>
              </Container>
              );
      }
}
 
export default Profile;
