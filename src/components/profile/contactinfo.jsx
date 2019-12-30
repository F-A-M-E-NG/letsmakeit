import React from 'react'
import Joi from 'joi-browser'
import { RotateSpinner } from 'react-spinners-kit'

// import { userContactInfo, updateContactInfo } from '../../services/accountService'
import { userContactInfo, updateContactInfo } from '../../services/userService'
import States from '../../utility/states';
import DynamicForm from '../../common/form';
import { Col, Row, Button, Form} from 'reactstrap';

class Contactinfo extends DynamicForm {
      state = {  
            data:{
                  homeAddress:"",
                  city:"",
                  state:"",
                  phoneNumber:""
                  },
            errors:{},
            loading:false,
            msg:null,
            error:null,
            nigerianStates:[]
      }

      schema = {
        _id: Joi.string(),
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
    phoneNumber: Joi.string()
      .required()
      .label("Phone Number"),
  };


populateContact = async () => {
    try {
    const {data:ContactDetails} = await userContactInfo();
    this.setState({ data: this.mapToViewModel(ContactDetails) });
      
    } catch (ex) {
    if (ex.response && ex.response.data){ 
     const error = ex.response.data.message
     this.setState({error})
    }
    }
 }

mapToViewModel(ContactDetails) {
    return {
      _id: ContactDetails.data._id,
      homeAddress: ContactDetails.data.homeAddress,
      city: ContactDetails.data.city,
      state: ContactDetails.data.state,
      phoneNumber: ContactDetails.data.phoneNumber
    };
  }



      doSubmit = async () =>{
        this.setState({loading:true})
        try {
        const {data} = await updateContactInfo(this.state.data)
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
    async  componentDidMount() {
           this.setState({nigerianStates:States})
          await this.populateContact()     
            }

      render() { 
        const { loading, msg, error } = this.state
            return ( 
                  <div className="advs-box-content">
                    {msg && <div className="alert alert-success">{msg}</div>}
                    {error && <div className="alert alert-danger">{error}</div>}
          <h4>Contact Information</h4>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col md={12}>
                    {this.renderInput("phoneNumber", "Phone Number", "tel")}
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