import React, { Component } from "react";
import { Card,Container  } from "react-bootstrap"
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom"
import app from "../firebase";

class Addnewitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: [
        { product: "", quantity: 0, mrp:0,price:0 },
      ]
    };
    this.rootRef = app.database().ref("Items/");
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange = (e, index) => {
    const items = this.state.form;
    items[index][e.target.name] = e.target.value;
    this.setState({
      form: items
    });
  };
  handleDelete = (index) => {
    const items = this.state.form;
    if (items.length > 1) {
      items.splice(index, 1);
      this.setState({
        form: items
      });
    } else {
      window.alert("Last row cant be delete!");
    }
  };
  addNewRow = () => {
    const items = this.state.form;
    const blankRow = { product: "", quantity: 0, mrp:0,price:0};
    this.setState({
      form: [...items, blankRow]
    });
  };
  handleSubmit(event) {
    event.preventDefault();
    alert('Product added to Items ');
    var Product=encodeURI(document.getElementById("product").value);
    var pro=Product;
    var Quantity=encodeURI(document.getElementById("quantity").value);
    var qua=Quantity;
    var MRP=encodeURI(document.getElementById("mrp").value);
    var Mrp=MRP;
    var Price=encodeURI(document.getElementById("price").value);
    var pri=Price;
    this.rootRef.push({
        MRP:Mrp,
        ProductName: pro,
        ProductQuantity: qua,
        SellingPrice:pri
    }) 
  }
 
  render() {
    return (
        <div className="container">
        <div >
          <Breadcrumb>
          <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to='/inventory'>Inventory</Link></BreadcrumbItem>
            <BreadcrumbItem active>Additems</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
            >
            <div className="w-100" style={{ maxWidth: "800px" }}>
            <Card id="card" border="success" style={{ borderRadius: "20px" }}>
            <Card.Header><h2 className="mb-2">Add item to the shop</h2></Card.Header>
                <Card.Body>
        
        {this.state.form &&
          this.state.form.map((item, index) => (
            <div key={index} className="row mt-5 mb-5">
              <div className="col col-md-5">
              <label for="Product">Product Name:</label>
                <input
                  placeholder="Product Name"
                  className="form-control"
                  type="text"
                  name="product"
                  value={item.product}
                  onChange={(e) => this.handleChange(e, index)}
                  id="product"
                />
              </div>
              <div className="col col-md-5">
              <label for="Quantity">Quantity:</label>
                <input
                  placeholder="Quantity"
                  className="form-control"
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => this.handleChange(e, index)}
                  id="quantity"
                />
              </div>
              <div className="col col-md-5">
              <label for="MRP">MRP:</label>
                <input
                  placeholder="MRP"
                  className="form-control"
                  type="number"
                  name="mrp"
                  value={item.mrp}
                  onChange={(e) => this.handleChange(e, index)}
                  id="mrp"
                />
              </div>
              <div className="col col-md-5">
              <label for="Price">Price:</label>
                <input
                  placeholder="Price"
                  className="form-control"
                  type="number"
                  name="price"
                  value={item.price}
                  onChange={(e) => this.handleChange(e, index)}
                  id="price"
                />
              </div>
              {/* <div className="col col-md-1 mb-9">
              <label >&nbsp;</label>
                <button
                  onClick={() => this.handleDelete(index)}
                  className="btn btn-danger"
                >
                  X
                </button>
              </div> */}
            </div>
          ))}
          <div className="row">
          <div className="col col-md-10 text-right">
            <button onClick={this.addNewRow} className="btn btn-secondary">
              +Add New
            </button>
            <button onClick={this.handleSubmit} className="ml-2 btn btn-primary">
              Add Items
            </button>
          </div>
        </div>
      </Card.Body>
        </Card>
        </div>
        </Container>
    </div>
    );
  }
}
export default Addnewitem;
 