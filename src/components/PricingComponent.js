import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Pricing(props) {
    return(
        <div class="container">
            <div >
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Pricing</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div class="col-12 centr"><br />
                    <strong><h1>Offered Packages</h1></strong>
                    <hr/>
                </div>
            <div class="container">

                <div class="row row-content align-items-center">
                    <div class="col col-sm col-md order-sm-first">
                        <div class="media">
                            <img class="introimage d-flex mr-3 img-thumbnail align-self-center" src="assets/images/bronzepricing.png" alt="Kiraana Haat" />
                            <div class="media-body">
                                <h2 class="mt-0">Bronze Package </h2>
                                <p class="d-none d-sm-block">Subscription rate - ₹499/month</p>
                                <p class="d-none d-sm-block">✓ Own Inventory</p>
                                <p class="d-none d-sm-block">✓ Brand Recognition</p>
                                <p class="d-none d-sm-block">✓ Delivery Service</p>
                                <p class="d-none d-sm-block">✖ Growth Tracking</p>
                                <p class="d-none d-sm-block">✖ Advertisement on website</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-content align-items-center">
                    <div class="col col-sm col-md">
                        <div class="media">
                            <div class="media-body">
                                <h2>Silver Package</h2>
                                <p class="d-none d-sm-block">Subscription rate - ₹999/month</p>
                                <p class="d-none d-sm-block">✓ Own Inventory</p>
                                <p class="d-none d-sm-block">✓ Brand Recognition</p>
                                <p class="d-none d-sm-block">✓ Delivery Service</p>
                                <p class="d-none d-sm-block">✓ Growth Tracking</p>
                                <p class="d-none d-sm-block">✖ Advertisement on website</p>
                            </div>
                            <img class="introimage d-flex ml-3 img-thumbnail align-self-center" src="assets/images/silverpricing.png" alt="Kiraana Haat" />
                        </div>
                    </div>
                </div>

                <div class="row row-content align-items-center">    
                    <div class="col col-sm col-md order-sm-first">
                        <div class="media">
                            <img class="introimage d-flex mr-3 img-thumbnail align-self-center" src="assets/images/goldpricing.png" alt="Kiraana Haat" />
                            <div class="media-body">
                                <h2 class="mt-0">Gold Package</h2>
                                <p class="d-none d-sm-block">Subscription rate - ₹1499/month</p>
                                <p class="d-none d-sm-block">✓ Own Inventory</p>
                                <p class="d-none d-sm-block">✓ Brand Recognition</p>
                                <p class="d-none d-sm-block">✓ Delivery Service</p>
                                <p class="d-none d-sm-block">✓ Growth Tracking</p>
                                <p class="d-none d-sm-block">✓ Advertisement on website</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default Pricing;