import React, { Component }from 'react';
import { Accordion, Card }  from 'react-bootstrap';

class FAQs extends Component {

    render(){
        return(
            <div className="container"><br />
                <h4>FAQs</h4>
                <h3>Frequently asked questions by our partners.</h3><br></br>
                <Accordion >
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    How do I contact support?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body><p>You can write to us at:<br></br>kiraana_haat@food.net<br></br>kiraana_haat_support@food.net</p>
                    <p>Or you can also call us at:<br></br>+91 1234 5678<br></br>+91 99638 25364</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    How to manage my inventory?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Open the menu (use the button with three dots on it), select "Manage Inventory", 
                        you can add any new item by selecting "Add New", you can also increase or decrease the 
                        quantity available for any item using "+" and "-" buttons.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    How to cancel/change my subscription plan?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>You can simply contact our support staff and they will help you with your subscription plan.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                    How long is the subscription plan for?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body><p>The subscription plan runs for a quarter (three months), you cannot change your plan in this duration. <br></br>Although if you want to discontinue your subscription you can do that at any time.<br></br>Payments are made monthly only.</p></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                    Where do I submit my grievances?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body><p>You can submit your feedback with our support staff.<br></br>You can write to us at:<br></br>kiraana_haat@food.net<br></br>kiraana_haat_support@food.net</p>
                    <p>Or you can also call us at:<br></br>+91 1234 5678<br></br>+91 99638 25364</p></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <br></br>
            </div>
        );
    }
}
export default FAQs;