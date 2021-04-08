import React from 'react';

const ManageSingleBook = ({manage}) => {
    const {name, authorName, price, _id} = manage;

    const deleteProduct = (id, e) => {
        // fetch(`http://localhost:4000/delete/${id}`, {
        //     method: 'DELETE'
        // })
        // .then(res => res.json())
        // .then(data => {
        //     if(data) {
        //         console.log(e.target.parentNode.parentNode.remove())
        //     }
        // })
        console.log(e.target.parentNode.parentNode.remove())
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{authorName}</td>
            <td>${price}</td>
            <td><button onClick={(e) => deleteProduct(_id, e)}>Delete</button></td>
        </tr>
    );
};

export default ManageSingleBook;