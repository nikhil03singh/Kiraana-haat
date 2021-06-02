import React, { Component } from "react";
import { Button, Card } from "react-bootstrap"
import { Container } from "react-bootstrap"
import app from "../firebase";
class Additem extends Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {},
            quantity: 1,
            show: true,
            max:5,
            min:0
        };
        this.rootRef = app.database().ref("Items/");
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      IncrementItem = () => {
        this.setState(prevState => {
          if(prevState.quantity < 9) {
            return {
              quantity: prevState.quantity + 1
            }
          } else {
            return null;
          }
        });
    }
    DecreaseItem = () => {
      this.setState(prevState => {
        if(prevState.quantity > 0) {
          return {
            quantity: prevState.quantity - 1
          }
        } else {
          return null;
        }
      });
    }
    ToggleClick = () => {
      this.setState({
        show: !this.state.show
      });
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
        var name=document.getElementById("name").value;
        var quantity=document.getElementById("quantity").value;
        this.rootRef.push({
          ProductName: name,
          ProductQuantity: quantity
        })
        if(this.validate()){
            console.log(this.state);
            let input = {};
            input["name"] = "";
            this.setState({input:input});
        }
        alert("Product added in the shop!")

      }
      validate(){
          let input = this.state.input;
          let errors = {};
          let isValid = true;
      
          if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter your name.";
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
        <div className="w-100" style={{ maxWidth: "700px" }}>
        <Card id="card" border="success">
          <Card.Header><strong>Add Items to the shop</strong></Card.Header>
            <Card.Body>
            <form onSubmit={this.handleSubmit}>
  
          <div class="form-group">
            <label for="name">Product Name:</label>
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
            <label for="Address">Product Quantity:</label>
                <Button onClick={this.IncrementItem}>+</Button>
                <input className="inputne" value={this.state.quantity} id="quantity" onChange={this.handleChange}/>
                <Button onClick = {this.DecreaseItem}>-</Button>
            </div>
              
            <input value="Add Another" class="btn btn-primary" />
            &nbsp; &nbsp; &nbsp; 
            <input type="submit" value="Add" class="btn btn-primary" />
            </form>
            </Card.Body>
        </Card>
        </div>
        </Container>
    )
    }
}

export default Additem