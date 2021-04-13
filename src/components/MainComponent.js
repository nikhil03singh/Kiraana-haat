import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    {/*<img
                        src="assets/images/main-logo.png"
                        class="rounded mx-auto d-block img-fluid"
                        alt="Kiraana Haat"
                    />*/}
                    <table>
                        <tr>
                            <td>Why use Kiraana Haat?</td>
                        </tr>
                        <tr>
                            <td><img
                        src="assets/images/sellerimage.jpg"
                        class = "introimage"
                        alt="Kiraana Haat"
                    /></td>
                            <td><img
                        src="assets/images/moneyimage.jpg"
                        class = "introimage"
                        alt="Kiraana Haat"
                    /></td>
                            <td><img
                        src="assets/images/growthgraphimage.png"
                        class = "introimage"
                        alt="Kiraana Haat"
                    /></td>
                        </tr>
                        <tr>
                            <td>Seller oriented approach</td>
                            <td>Best pricing compared to others</td>
                            <td>Keep track of your growth</td>
                        </tr>
                        <tr>
                            <td>We focus more on your adversiting than our own branding.</td>
                            <td>We provide our services on minimum price possible.</td>
                            <td>You can choose from our plans and track your growth.</td>

                        </tr>
                        <tr>
                            <td>Our motto is - "THE BRAND IS YOU".</td>
                            <td>Kindly refer to the PRICING SECTION for more info.</td>
                            <td>Our VIP package comes in with many tracking options.</td>

                        </tr>
                    </table>


                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;