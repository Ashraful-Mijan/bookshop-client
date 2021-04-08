import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';

const Home = () => {
    const [books, setBooks] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:4000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="container">

            <div class="input-group mb-3 py-5 w-50 mx-auto input-group-lg">
                <input type="text" class="form-control" placeholder="Search Book" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button class="input-group-text btn btn-primary" id="basic-addon2">Search</button>
            </div>

            <div className="row">
                {
                    books.map(book => <Books key={book._id} book={book} />)
                }
            </div>
        </div>
    );
};

export default Home;