import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddBook from '../AddBook/AddBook';
import Management from '../Management/Management';

const routes = [
    {
        path: "/managebooks",
        exact: true,
        sidebar: () => <div>manage pages!</div>,
        main: () => <Management/>
    },
    {
        path: "/addbooks",
        sidebar: () => <div>added books pages!</div>,
        main: () => <AddBook />
    },
    {
        path: "/",
        sidebar: () => <div>added books pages!</div>,
        main: () => <AddBook />
    },
    {
        path: "/editbooks",
        sidebar: () => <div>edit pages!</div>,
        main: () => <h2>edit pages</h2>
    }
];

const Admin = () => {

    return (
        <Router>
            <div style={{ display: "flex"}} className=''>
                <div className="bg-info px-5 py-3 vh-100">
                    <ul style={{ listStyleType: "none", padding: 0 } } >
                        <li>
                            <Link className="text-white text-decoration-none" to="/managebooks">Manage Books</Link>
                        </li>
                        <li>
                            <Link className="text-white text-decoration-none" to="/addbooks">Add Book</Link>
                        </li>
                        <li>
                            <Link className="text-white text-decoration-none" to="/editbooks">Edit Books</Link>
                        </li>
                    </ul>

                    <Switch>
                        {routes.map((route, index) => (
                            // You can render a <Route> in as many places
                            // as you want in your app. It will render along
                            // with any other <Route>s that also match the URL.
                            // So, a sidebar or breadcrumbs or anything else
                            // that requires you to render multiple things
                            // in multiple places at the same URL is nothing
                            // more than multiple <Route>s.
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar />}
                            />
                        ))}
                    </Switch>
                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {routes.map((route, index) => (
                            // Render more <Route>s with the same paths as
                            // above, but different components this time.
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default Admin;