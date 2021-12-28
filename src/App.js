import React,{useEffect} from 'react';
import './App.css';

import Header from './Component/Header';
import Home from './Component/Home'
import Checkout from './Component/Checkout'
import Payment from './Component/Payment'
import { BrowserRouter as Router, Routes, Route 
} from "react-router-dom";
import Login from './Component/Login'
import { useStateValue } from "./Component/StateProvider";
import { auth } from "./firebase";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import React, { Fragment } from 'react';

const promise = loadStripe('pk_test_51K96UHSEjn9TKBMHZtwlIkqIfBUETj8r7Zmsc6QZMzjWXUjuTxhkDKNdknJmQheszVBGXwDFce4wdLUhvpEroDxw00Q4wwgg7Y')

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });

      }else{
        dispatch({
          type: "SET_USER",
          user: null,
      })}
    }) 
    
  }, [])
  return (
    <Router>
      {/* {<Header/> } */}
    <div className="App">
   <Routes>
   
    {/* <Route path="/" component={Header}>
      <IndexRoute component={Home} /> */}
       <Route path="/"  element={<><Header/><Home/></>} /> 
    
  
  
    <Route path='/payment'   element={ <><Header/>
    <Elements stripe={promise}><Payment/> </Elements>     </>}  
    
 />
 
           <Route path='/Checkout' element={<Checkout/>}/>
           <Route path='/login' element={<Login/>}/>
           {/* <Route path='/payment ' element=  { < Payment/>}/> */}
 
        </Routes>
    </div>
    </Router>
  );
  }

export default App;
