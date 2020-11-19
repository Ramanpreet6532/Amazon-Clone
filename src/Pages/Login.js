import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();  //prevents page refresh

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged In , redirect to homepage
                history.push("/");
            })
            .catch((err) => alert(err.message));
    }

    const register = (e) => {
        e.preventDefault();
        console.log(email, password)
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // Created a user and logged in, redirect to homepage
                history.push("/");
            })
            .catch((e) => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>

            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        onClick={login}
                        className="login_signInButton"
                    >
                        Sign In
                    </button>

                    <p>By signing-in, you agree to Amazon's Conditions of Use & Sales. Please See our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

                    <button
                        onClick={register}
                        className="login_registerButton"
                    >
                        Create your Amazon Account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
