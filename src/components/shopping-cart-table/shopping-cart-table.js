import React, { Component } from "react";
import "./shopping-cart-table.css";
import { connect } from "react-redux";
import { componentAddToCart, componentOnDecrease, componentOnDelete, calculateTotalPrice, calculateItems } from "../../actions/actions";



class ShoppingCartTable extends Component {

    componentDidUpdate() {
        this.props.calculateTotalPrice();
        this.props.calculateItems();
    };


    render() {
        const { items, total, onIncrease, onDecrease, onDelete } = this.props;
        
        const renderRow = (item, idx) => {
            const { id, title, count, price } = item;
            
            return (
                <tr key={title}>
                    <td>{idx + 1}</td>
                    <td>{title}</td>
                    <td>{count}</td>
                    <td>{price} $</td>
                    <td className="d-flex">
                        <button
                            onClick={() => onIncrease(id)}
                            className="btn btn-outline-success btn-sm mr-2">
                            <i className="fa fa-plus-circle"></i>
                        </button>
                        <button
                            onClick={() => onDecrease(id)}
                            className="btn btn-outline-warning btn-sm mr-2">
                            <i className="fa fa-minus-circle"></i>
                        </button>
                        <button
                            onClick={() => onDelete(id)}
                            className="btn btn-outline-danger btn-sm">
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                </tr>
            );
        };

        return (
            <div className="shopping-cart mt-4">
                <h3>Your Order</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Count</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(renderRow)}
                    </tbody>
                </table>
                <span
                    className="d-flex text-light justify-content-end mb-5">Total:{total}$</span>
            </div >
        );
    };
};



const mapStateToProps = ({ cartItems, orderTotal }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};


const mapDispatchToProps = {
    onIncrease: componentAddToCart,
    onDecrease: componentOnDecrease,
    onDelete: componentOnDelete,
    calculateTotalPrice,
    calculateItems
};



export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);