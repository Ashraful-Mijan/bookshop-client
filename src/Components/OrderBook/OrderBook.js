import React from 'react';

const OrderBook = ({orders}) => {
    const {email, bookName, price, date} = orders;
    return (
        <tr>
            <td>{email}</td>
            <td>{bookName}</td>
            <td>${price}</td>
            <td>{date}</td>
        </tr>
    );
};

export default OrderBook;