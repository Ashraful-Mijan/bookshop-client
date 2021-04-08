import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Checkouts = () => {
    const { id } = useParams();
    const [checkout, setCheckout] = useState({})
    const [user, setUser] = useContext(UserContext)

    useEffect(() => {
        fetch(`http://localhost:4000/checkout/${id}`)
            .then(res => res.json())
            .then(data => setCheckout(...data))
    }, [id])

    const handleOrder = () => {
        const order = {email: user.email, name: user.name, bookName: checkout.name, date: new Date(), price: checkout.price}

        fetch('http://localhost:4000/order', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        })
        alert("order successfully")
    }

    console.log(checkout)
    return (
        <div className="container mt-5">
            <div className="p-5 bg-success">
                <table className="table table-light table-hover p-5 rounded">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{checkout.name}</td>
                            <td>1</td>
                            <td>${checkout.price}</td>
                        </tr>

                        <tr>
                            <td>Total</td>
                            <td></td>
                            <td>${checkout.price}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary d-block ms-auto" onClick={handleOrder}>Checkout</button>
            </div>
        </div>
    );
};

export default Checkouts;