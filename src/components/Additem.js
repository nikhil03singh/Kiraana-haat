import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { Card, Container } from "react-bootstrap"
import * as Yup from 'yup';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Additem() {
  const initialValues = {
    numberOfProducts: '',
    products: []
};

const validationSchema = Yup.object().shape({
  numberOfProducts: Yup.string()
        .required('Number of products is required'),
    products: Yup.array().of(
        Yup.object().shape({
            name: Yup.string()
                .required('Name is required'),
            quantity: Yup.number()
                .required('Quantity is required')
        })
    )
});

function onChangeProducts(e, field, values, setValues) {
    // update dynamic form
    const products = [...values.products];
    const numberOfProducts = e.target.value || 0;
    const previousNumber = parseInt(field.value || '0');
    if (previousNumber < numberOfProducts) {
        for (let i = previousNumber; i < numberOfProducts; i++) {
          products.push({ name: '', quantity: '' });
        }
    } else {
        for (let i = previousNumber; i >= numberOfProducts; i--) {
          products.splice(i, 1);
        }
    }
    setValues({ ...values, products });

    // call formik onChange method
    field.onChange(e);
}

function onSubmit(fields) {
    // display form field values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
}

return (
    <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to='/inventory'>Inventory</Link></BreadcrumbItem>
            <BreadcrumbItem active>Additems</BreadcrumbItem>
          </Breadcrumb>
        </div>
  <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
        >
        <div className="w-100" style={{ maxWidth: "900px" }}>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
        {({ errors, values, touched, setValues }) => (
            <Form>
                <Card id="card" border="success">
                    <Card.Header><strong>Add Items to the shop</strong></Card.Header>
                    <Card.Body>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Number of Products</label>
                                <Field name="numberOfProducts">
                                {({ field }) => (
                                    <select {...field} className={'form-control' + (errors.numberOfProducts && touched.numberOfProducts ? ' is-invalid' : '')} onChange={e => onChangeProducts(e, field, values, setValues)}>
                                        <option value=""></option>
                                        {[1,2,3,4,5,6,7,8,9,10].map(i => 
                                            <option key={i} value={i}>{i}</option>
                                        )}
                                    </select>
                                )}
                                </Field>
                                <ErrorMessage name="numberOfProducts" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                    </Card.Body>
                    <FieldArray name="products">
                    {() => (values.products.map((products, i) => {
                        const productErrors = errors.products?.length && errors.products[i] || {};
                        const productTouched = touched.products?.length && touched.products[i] || {};
                        return (
                            <div key={i} className="list-group list-group-flush">
                                <div className="list-group-item">
                                    <Card.Title tag="h5">Product {i + 1}</Card.Title>
                                    <div className="form-row">
                                        <div className="form-group col-6">
                                            <label>Product Name</label>
                                            <Field name={`products.${i}.name`} type="text" className={'form-control' + (productErrors.name && productTouched.name ? ' is-invalid' : '' )} />
                                            <ErrorMessage name={`products.${i}.name`} component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group col-6">
                                            <label>Product Quantity</label>
                                            <Field name={`products.${i}.quantity`} type="number" className={'form-control' + (productErrors.email && productTouched.email ? ' is-invalid' : '' )} />
                                            <ErrorMessage name={`products.${i}.quantity`} component="div" className="invalid-feedback" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }))}
                    </FieldArray>
                    <div className="card-footer text-center border-top-0">
                        <button type="submit" className="btn btn-primary mr-1">
                            Add Product
                        </button>
                        <button className="btn btn-secondary mr-1" type="reset">Reset</button>
                    </div>
                </Card>
            </Form>
        )}
    </Formik>
    </div>
    </Container>
    </div>
)
}

export default Additem;