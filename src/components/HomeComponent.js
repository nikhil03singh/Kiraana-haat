import React from 'react';
import {Jumbotron} from 'reactstrap';

function Home(props) {
    return (
        <div>
        <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Kiraana Haat</h1>
                                <p>
                                    Want to see your business grow? Kiraana Haat offers seller oriented opportunities
                                    at the lowest price possible. TRY IT NOW to embark your journey to success.
                    </p>
                            </div>
                        </div>
                    </div>
        </Jumbotron>
        <div class="container">
            <div class="centr">
            <div class="col-12 order-sm-center"><br />
                    <h3>Why use Kiraana Haat?</h3>
                </div>
            </div>
            <div class="container">
                
                <div class="row row-content align-items-center">
                    <div class="col col-sm col-md order-sm-first">
                        <div class="media">
                            <img class="introimage d-flex mr-3 img-thumbnail align-self-center" src="assets/images/sellerimage.jpg" alt="Kiraana Haat" />
                            <div class="media-body">
                                <h2 class="mt-0">Seller oriented approach </h2>
                                <p class="d-none d-sm-block">We focus more on your adversiting than our own branding.</p>
                                <p class="d-none d-sm-block">Our motto is - "THE BRAND IS YOU".</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-content align-items-center">
                    <div class="col col-sm col-md">
                        <div class="media">
                            <div class="media-body">
                                <h2>Best pricing compared to others</h2>
                                <p class="d-none d-sm-block">We provide our services on minimum price possible.</p>
                                <p class="d-none d-sm-block">Kindly refer to the PRICING SECTION for more info.</p>
                            </div>
                            <img class="introimage d-flex ml-3 img-thumbnail align-self-center" src="assets/images/moneyimage.jpg" alt="Kiraana Haat" />
                        </div>
                    </div>
                </div>
        
                <div class="row row-content align-items-center">    
                    <div class="col col-sm col-md order-sm-first">
                        <div class="media">
                            <img class="introimage d-flex mr-3 img-thumbnail align-self-center" src="assets/images/growthgraphimage.png" alt="Kiraana Haat" />
                            <div class="media-body">
                                <h2 class="mt-0">Keep track of your growth</h2>
                                <p class="d-none d-sm-block">You can choose from our plans and track your growth.</p>
                                <p class="d-none d-sm-block">Our VIP package comes in with many tracking options</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;