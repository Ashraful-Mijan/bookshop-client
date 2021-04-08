import React from 'react';
import { useHistory } from 'react-router-dom';

const Books = ({ book }) => {
    const { name, authorName, price, imageURL, _id} = book;
    let history = useHistory()
    const handleCheckout = (id) => {
        history.push(`/checkout/${id}`)
    }

    return (
        <div className="col-md-4 mb-3">
            <div class="card ">
                <img src={imageURL} class="card-img-top w-75 mx-auto p-3" alt="..." />
                <div class="card-body">
                    <h5 class="card-title fw-bold">{name}</h5>
                    <p class="card-text">{authorName}</p>
                    <div className="d-flex justify-content-between">
                        <span class="fw-bold fs-3 text-primary">${price}</span>
                        <button onClick={()=> handleCheckout(`${_id}`)} class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;