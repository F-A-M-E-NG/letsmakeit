import React from 'react'
import Joi from 'joi-browser'

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
            nigerianStates:[{name:"hell", _id:1}]
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
      doSubmit = () =>{
      console.log("Update info click")
      }
      componentDidMount() {
           this.setState({nigerianStates:States})
      }
      render() { 
            return ( 
                  <div className="advs-box-content">
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
            <Button className="btn1" size="md" type="submit">Update Contact Information</Button>
          </Form>
        </div>
             );
      }
}
 
export default Contactinfo;