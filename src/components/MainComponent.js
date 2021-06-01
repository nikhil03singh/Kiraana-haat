import React, { useEffect } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Pricing from './PricingComponent';
import Services from './ServicesComponent';
import Resources from './ResourcesComponent';
import FAQs from './FAQsComponent';
import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import Signup from "./Signup"
import PrivateRoute from "./PrivateRoute"
import Dashboard from "./Dashboard"
import Inventory from "./Inventory"
import Additem from "./Additem"
import UpdateProfile from "./UpdateProfile"
import { AuthProvider } from "../Contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { auth } from "../firebase";
import { useDispatch } from "react-redux";

const Main =() => {
    const dispatch =useDispatch()
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
          if (user) {
            const idTokenResult = await user.getIdTokenResult();
            console.log("user", user);
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                email: user.email,
                token: idTokenResult.token,
              },
            });
          }
        });
        // cleanup
        return () => unsubscribe();
      }, []);

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
                        <Router>
                            <AuthProvider>
                            <Switch>
                                <Route path="/home" component={HomePage} />
                                <Route path="/pricing" component={() => <Pricing/>} />
                                <Route path="/services" component={() => <Services />} />
                                <Route path="/resources" component={() => <Resources />} /> 
                                <Route path="/faqs" component={() => <FAQs />} /> 
                                <PrivateRoute exact path="/dashboard" component={()=> <Dashboard/>} />
                                <PrivateRoute path="/update-profile" component={()=> <UpdateProfile/>} />
                                <PrivateRoute path="/inventory" component={()=> <Inventory/>} />
                                <PrivateRoute path="/additem" component={()=> <Additem/>} />
                                <Route path="/signup" component={()=><Signup/>} />
                                <Route path="/login" component={()=><Login/>} />
                                <Route path="/forgot-password" component={()=><ForgotPassword/>} />
                                <Redirect to="/home" />
                                </Switch>
                            </AuthProvider>
                        </Router>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }

export default Main;