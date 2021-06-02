import React, { Component } from "react";
import { Card } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import app from "../firebase";
import Login from "./Login"

class Inventory extends Component {
    constructor() {
        super();
        this.state = {
          input: {},
          errors: {}
        };
        this.rootRef = app.database().ref("shops/");
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
        
      handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }
      handleSubmit(event) {
        event.preventDefault();
      
        if(this.validate()){
            console.log(this.state);
      
            let input = {};
            input["name"] = "";
            input["address"] = "";
            input["phone"] = "";
            input["gstno"] = "";
            this.setState({input:input});
      
        }
        var name=document.getElementById("name").value;
        var address=document.getElementById("address").value;
        var gst=document.getElementById("gstno").value;
        var phone=document.getElementById("phone").value;
        this.rootRef.push({
          GST: gst,
          ShopAddress: address,
          ShopContactNo: phone,
          ShopName: name
        })
      }
      validate(){
          let input = this.state.input;
          let errors = {};
          let isValid = true;
      
          if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter your name.";
          }
      
          if (!input["address"]) {
            isValid = false;
            errors["address"] = "Please enter your Address.";
          }
      
          if (!input["phone"]) {
            isValid = false;
            errors["phone"] = "Please enter your phone number.";
          }
      
          if (typeof input["phone"] !== "undefined") {
              
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(input["phone"])) {
              isValid = false;
              errors["phone"] = "Please enter only number.";
            }else if(input["phone"].length !== 10){
              isValid = false;
              errors["phone"] = "Please enter valid phone number.";
            }
          }

          if (!input["gstno"]) {
            isValid = false;
            errors["gstno"] = "Please enter your GST number.";
          }
      
          if (typeof input["gstno"] !== "undefined") {
            if (!pattern.test(input["gstno"])) {
              isValid = false;
              errors["gstno"] = "Please enter only number.";
            }else if(input["gstno"].length !== 15){
              isValid = false;
              errors["gstno"] = "Please enter valid GST number.";
            }
          }
      
      
          this.setState({
            errors: errors
          });
      
          return isValid;
      }
      render(){
    return(
        <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
        >
        <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
            <Card.Body>
            <form onSubmit={this.handleSubmit}>
  
          <div class="form-group">
            <label for="name">Shop Name:</label>
            <input 
              type="text" 
              name="name" 
              value={this.state.input.name}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter name" 
              id="name" />
  
              <div className="text-danger">{this.state.errors.name}</div>
          </div>
  
          <div class="form-group">
            <label for="Address">Shop Address:</label>
            <input 
              type="text" 
              name="address" 
              value={this.state.input.address}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Address" 
              id="address" />
  
              <div className="text-danger">{this.state.errors.address}</div>
          </div>
 
          <div class="form-group">
            <label for="GSTNO">GST Number:</label>
            <input 
              type="text" 
              name="gstno" 
              value={this.state.input.gstno}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter GST Number" 
              id="gstno" />
  
              <div className="text-danger">{this.state.errors.gstno}</div>
          </div>
  
          <div class="form-group">
            <label for="Phone">Phone:</label>
            <input 
              type="text" 
              name="phone" 
              value={this.state.input.phone}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter phone" 
              id="phone" />
  
              <div className="text-danger">{this.state.errors.phone}</div>
          </div>
              
          <input type="submit" value="Add Shop" class="btn btn-primary" />
        </form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already Registerd shop? <Link to="/additem">Add Item</Link>
        </div>
        </div>
        </Container>
    )
    }
}

export default Inventory