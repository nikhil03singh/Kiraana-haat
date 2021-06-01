import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./reducers";

const store =createStore( rootReducer,composeWithDevTools());

ReactDOM.render(
 // <React.StrictMode>
 <Provider store={store}>
  <BrowserRouter>  
    <App />
  </BrowserRouter>
  </Provider>,
// </React.StrictMode>,
  document.getElementById('root')
);