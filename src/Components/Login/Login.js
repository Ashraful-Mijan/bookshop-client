import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.Config'
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    let history = useHistory()
    let location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    var provider = new firebase.auth.GoogleAuthProvider();
    const [user, setUser] = useContext(UserContext)
    


    function GoogleSingIn() {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const newUser = {
                    email: result.user.email,
                    name: result.user.displayName
                }
                setUser(newUser)
                history.replace(from);
            }).catch((error) => {
                
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    return (
        <div className="container text-center mt-5">
            <button onClick={GoogleSingIn} className=" btn btn-primary">Login With Google</button>
        </div>
    );
};

export default Login;