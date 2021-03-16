import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <img
                        src="assets/images/main-logo.png"
                        class="rounded mx-auto d-block img-fluid"
                        alt="Kiraana Haat"
                    />
                    <p>Description will come here</p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;