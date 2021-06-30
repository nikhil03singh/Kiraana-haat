import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Services(props) {
    return(
        <div class="container">
            <div >
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Services</BreadcrumbItem>
                </Breadcrumb>
            </div>
            
            <div class="col-12 centr"><br />
                <strong><h1>Services Offered</h1></strong>
                <hr/>
            </div>
            
            <div class="container">

                <div class="row row-content align-items-center">
                    <div class="col col-sm col-md order-sm-first">
                        <div class="media">
                            <img class="introimage d-flex mr-4 img-thumbnail align-self-center" src="assets/images/deliveryimage.jpg" alt="Kiraana Haat" />
                            <div class="media-body">
                                <h2 class="mt-0">Fast and convenient delivery</h2>
                                <p class="d-none d-sm-block">No stress of dealing with delivery issues</p>
                                <p class="d-none d-sm-block">Kiraana Haat has its own delivery management system</p>
                                <p class="d-none d-sm-block">For any issues with delivery system, kindly contact support</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-content align-items-center">
                    <div class="col col-sm col-md">
                        <div class="media">
                        <img class="introimage d-flex mr-4 img-thumbnail align-self-center" src="assets/images/inventoryimage.png" alt="Kiraana Haat" />
                            <div class="media-body">
                                <h2>Inventory Management</h2>
                                <p class="d-none d-sm-block">Conveniently add or delete items from inventory as and when required</p>
                                <p class="d-none d-sm-block">Give your customers real-time experience</p>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div class="row row-content align-items-center">    
                    <div class="col col-sm col-md order-sm-first">
                        <div class="media">
                            <img class="introimage d-flex mr-4 img-thumbnail align-self-center" src="assets/images/orderhistory.webp" alt="Kiraana Haat" />
                            <div class="media-body">
                                <h2 class="mt-0">Keep track of previous orders</h2>
                                <p class="d-none d-sm-block">Order history available till current quater</p>
                                <p class="d-none d-sm-block">History helps in tracking returns and exchanges</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-content align-items-center">
                    <div class="col col-sm col-md">
                        <div class="media">
                        <img class="introimage d-flex mr-4 img-thumbnail align-self-center" src="assets/images/inventoryimage.png" alt="Kiraana Haat" />
                            <div class="media-body">
                                <h2>Order Tracking</h2>
                                <p class="d-none d-sm-block">Real time tracking of orders available</p>
                                <p class="d-none d-sm-block">Easily know estimated time for order to reach</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default Services;