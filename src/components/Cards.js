import React from "react";
import {FaCartArrowDown} from 'react-icons/fa';
import{FaDollarSign} from'react-icons/fa';
import{FaTruck} from 'react-icons/fa';
import "./Cards.css"



const Cards = () => {
  return (
    <div  className="icons">

    <div className="cart">
    <div className="order-cart">

        <FaCartArrowDown/>
</div>
        <div className="order-head">
            <h1>Make An Order</h1>
        </div>
        <div className="orders">
            <h1>Order from your trusted 
suppler of your choice,
an grow your business. </h1>
        </div>
    </div>

    <div className="cart">
    <div className="order-cart">

    <FaDollarSign/>
</div>
    <div className="order-head">
            <h1>Make payments</h1>
        </div>
        <div className="orders">
            <h1>Save money save time by 
ordering with us. </h1>
        </div>
    </div>
   

    <div className="cart">
        <div className="order-cart">

    <FaTruck/>
        </div>
    <div className="order-head">
            <h1>Get Fast Delivery</h1>
        </div>
        <div className="orders">
            <h1>Always deliver more then 
expected.</h1>
        </div>
    
    </div>
    </div>
  )
}

export default Cards;