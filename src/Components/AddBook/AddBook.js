import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddBook = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();

    //submit form data in mongodb
    const onSubmit = data => {
        const bookData = {
            name: data.bookName,
            authorName: data.authorName,
            price: data.price,
            imageURL: imageURL
        }

        fetch('http://localhost:4000/addBooks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
        console.log(bookData)
    };

    const imageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '1700808f047b1d6d5c6058f995df69ed');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h2>Add book</h2>
            <div className="p-5 bg-success">
                <form onSubmit={handleSubmit(onSubmit)} className='bg-light p-4 rounded'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="bookName" className="form-label">Book Name: </label>
                                <input name="bookName" type="text" placeholder="Enter Name" className="form-control" ref={register} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price: </label>
                                <input name="price" type="text" placeholder="add price" className="form-control" ref={register} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="authorName" className="form-label">Author Name: </label>
                                <input name="authorName" type="text" placeholder="Enter Name" className="form-control" ref={register} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="photo" className="form-label">Add Book Cover Photo: </label>
                                <input onChange={imageUpload} name="photo" type="file" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <input className="ms-auto d-block mt-2 btn btn-primary" type="submit" value="Save"/>
                </form>
            </div>
        </div>
    );
};

export default AddBook;