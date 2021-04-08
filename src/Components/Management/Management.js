import React, { useEffect, useState } from 'react';
import ManageSingleBook from '../ManageSingleBook/ManageSingleBook';

const Management = () => {
    const [manage, setManage] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/books')
        .then(res => res.json())
        .then(data => setManage(data))
    }, [])

    return (
        <div>
            <div className="p-5 bg-success">
                <table className="table table-light table-hover p-5 rounded">
                    <thead>
                        <tr>
                            <th scope="col">Book Name</th>
                            <th scope="col">Author Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manage.map(manageBook => <ManageSingleBook key={manageBook._id} manage={manageBook} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Management;