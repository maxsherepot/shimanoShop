import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./shop-header.css";
import { connect } from "react-redux";
import { calculateTotalPrice, calculateItems } from "../../actions/actions";



class ShopHeader extends Component {
    
    componentDidUpdate() {
        this.props.calculateTotalPrice();
        this.props.calculateItems();
    };


    render() {
        const { itemsCount, orderTotal } = this.props;
        
        return (
            <nav className="navbar sticky-top navbar-expand-sm bg-dark navbar-dark py-1
             justify-content-between container">
                <div className="navbar-logo">
                    <Link className="navbar-brand" to="/">
                        <h2>AceStore</h2>
                    </Link>
                </div>
                
                <div className="navbar-icons">
                    <Link to="/cartpage">
                        <i className="fa fa-shopping-cart mr-2"></i>
                        <span>{itemsCount} item(s) {orderTotal}$</span>
                    </Link>
                </div>
            </nav>
        );
    };
};




const mapStateToProps =({orderTotal,itemsCount, cartItems})=>{
    return {orderTotal,itemsCount,cartItems};
};


const mapDispatchToProps = {
    calculateTotalPrice,
    calculateItems
};



export default connect(mapStateToProps,mapDispatchToProps)(ShopHeader);
