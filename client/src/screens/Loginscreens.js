import axios from "axios";
import React, { useState } from "react";

function Loginscreens() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function login() {
        const user = {
            email,
            password
        };
        try {
            const response = await axios.post('/api/users/login', user);
            console.log(response.data); // Assuming response contains user data
            // Optionally, handle successful login (e.g., redirect user to dashboard)
        } catch (error) {
            console.log(error);
            setError("An error occurred during login. Please try again later.");
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Login</h2>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-primary" onClick={login}>Login</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loginscreens;
