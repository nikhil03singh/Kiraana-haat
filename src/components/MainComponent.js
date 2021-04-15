import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Pricing from './PricingComponent';
import Services from './ServicesComponent';
import Resources from './ResourcesComponent';
import FAQs from './FAQsComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Main extends Component {
    render() {
        const HomePage = () => {
            return(
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={HomePage} />
                            <Route exact path="/pricing" component={() => <Pricing/>} />
                            <Route exact path="/services" component={() => <Services />} />
                            <Route exact path="/resources" component={() => <Resources />} /> 
                            <Route exact path="/faqs" component={() => <FAQs />} /> 
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default Main;