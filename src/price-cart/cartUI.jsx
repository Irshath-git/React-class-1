import React from "react";
import '../price-cart/cart-style.css';

const Cart=props =>{
    return(
        <div className="card shadow">
            <div className="overflow">
                <span></span>
                <h2 className="card-title">{props.title}</h2>
            </div>
            <div className="card-body">

            </div>
        </div>
    )
}

export default Cart;