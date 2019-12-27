import React from 'react'
import Joi from 'joi-browser'
import { RotateSpinner } from 'react-spinners-kit'

import { updateContactInfo, userContactInfo } from '../../services/userService'
import States from '../../utility/states';
import DynamicForm from '../../common/form';
import { Col, Row, Button, Form} from 'reactstrap';

class Contactinfo extends DynamicForm {
      state = {  
            data:{
                  homeAddress:"",
                  city:"",
                  state:""
                  },
            errors:{},
            loading:false,
            msg:null,
            error:null,
            nigerianStates:[]
      }

      schema = {
    homeAddress: Joi.string()
      .required()
      .min(30)
      .max(255)
      .label("Address"),
    city: Joi.string()
      .required().min(3).max(50)
      .label("City"),
    state: Joi.string()
      .required()
      .label("State"),
  };
  getContactInfo = async () => {
    try{
      const {data} = await userContactInfo()
      console.log(data)
  }catch(ex){
    if(ex.response && ex.response.data){
      console.log(ex.response.data)
    }else{
      console.log("something failed")
    }
  }
  }
      doSubmit = async () =>{
        this.setState({loading:true})
        try {
        const {data} = await updateContactInfo(this.state.data)
        console.log(data)
        this.setState({msg:data.message, error:null, loading:false})
      }
      catch(ex){
        if(ex.response && ex.response.data){
          this.setState({msg:null, error:ex.response.data, loading:false})
        }else{
          this.setState({error:"Something went wrong, try again later",loading:false, msg:null})
        }
      }
      
      }
      componentDidMount() {
           this.setState({nigerianStates:States})
           this.getContactInfo()     
            }

      render() { 
        const { loading, msg, error } = this.state
        console.log(this.state.data)
            return ( 
                  <div className="advs-box-content">
                    {msg && <div className="alert alert-success">{msg}</div>}
                    {error && <div className="alert alert-danger">{error}</div>}
          <h4>Contact Information</h4>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col md={12}>
                    {this.renderTextarea("homeAddress", "Home Address")}
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                    {this.renderInput("city", "City")}
              </Col>
              <Col md={6}>
                    {this.renderSelect("state", "State", this.state.nigerianStates )}
              </Col>
            </Row>
            <Button className="btn1" size="md" type="submit" disabled={loading}>
               {loading &&  <div>
                 <RotateSpinner
                size={20}
                color="#ffffff"
                loading={loading}
            />
            </div>
            }

              {!loading && "Update Contact Information"}
              </Button>
          </Form>
        </div>
             );
      }
}
 
export default Contactinfo;