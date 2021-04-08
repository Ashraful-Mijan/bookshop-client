import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const [user, setUser] = useContext(UserContext)
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light fw-bold">
            <div class="container">
                <Link class="navbar-brand" to="/">Book Shop</Link>
                <span className="text-primary">{user.name}</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <Link class="nav-link active" to="/home">Home</Link>
                        <Link class="nav-link" to="/orders">Orders</Link>
                        <Link class="nav-link" to="/admin">Admin</Link>
                        <Link class="nav-link" to="/deals">Deals</Link>
                        <Link class="nav-link" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;