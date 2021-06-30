import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Resources(props) {
    return(
        <div className="container">
                <div >
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Resources</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <strong><h1>Resources</h1></strong>
                        <hr />
                    </div>
                </div>
        <div className="container"><br />
            <h3>Welcome to selling with Kiraana-Haat!!!</h3><br></br>
            <h5>We are more than happy to be partnered with you. </h5><br></br>
            <ul>
                <li><h4>Let’s begin with, what is Kiraana-Haat?</h4></li>
                <ul>
                    <p>
                        <li>Kiraana-Haat is a start-up that aspires to be an ecommerce giant in the upcoming years.</li>
                        <li>With your help, it seems possible now.</li>
                        <li> Kiraana-Haat’s mission is to be the fastest grocery delivery platform throughout the country.</li>
                    </p>
                </ul>
                <li><h4>What's in it for you?</h4></li>
                <ul>
                    <p>
                        <li>We work with a seller oriented approach, we make sure you get recognized for the good quality of your products.</li>
                        <li>You don't need to worry about managing your deliveries anymore, leave that to us, we will take care of it.</li>
                        <li>We help you keep track of your growth, after all business is all about growing.</li>
                        <li>Keep track of your order history, as well as returns and exchanges.</li>
                    </p>
                </ul>
                <li><h4>Registration Process.</h4></li>
                <ul>
                    <p>
                        <li>Kiraana-Haat provides the sellers a really simple way of registration, just go to "Login", click on "Register here", fill in some basic details (it is mandatory to have a GSTIN), and done you are a partner with Kiraana-Haat now.</li>
                    </p>
                </ul>
                <li><h4>Payment Process.</h4></li>
                <ul>
                    <p>
                        <li>You can select out of any of our packages as per your requirement.</li>
                        <li>Payments can be made online using NetBanking.</li>
                    </p>
                </ul>
            </ul>
            <br/>
            <hr/>
            <h6>For any queries, head to our FAQS sections, if your query still remains unresolved contact our support team. </h6>
            <hr/>
        </div>
        </div>
    );
}

export default Resources;