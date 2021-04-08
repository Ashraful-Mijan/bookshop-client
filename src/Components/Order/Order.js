import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderBook from '../OrderBook/OrderBook';

const Order = () => {
    const [user, setUser] = useContext(UserContext)
    const [order, setOrder] = useState([])
    useEffect(()=> {
        fetch(`http://localhost:4000/getOrder/?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [user.email])
    return (
        <div className="container mt-5">
            <table className="table table-light table-hover p-5 rounded">
                    <thead>
                        <tr>
                            <th scope="col">Email</th>
                            <th scope="col">Book Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map(orders => <OrderBook key={orders._id} orders={orders} />)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default Order;