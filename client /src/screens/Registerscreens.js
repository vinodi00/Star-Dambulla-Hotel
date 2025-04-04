import axios from "axios";
import React, { useState } from "react";
import Error from "../components/Error";
import Success from "../components/Success";
import Loader from "../components/Loader";

function Registerscreens() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(""); 
    const [loading, setLoading] = useState(false); 

    async function register() {
        if (password === cpassword) {
            
            const user = {
                name,
                email,
                password,
                cpassword,
            };
            

            try {
                setLoading(true); // Set loading to true when registering starts
                await axios.post('/api/users/register', user);
                setLoading(false); // Set loading to false after registration is completed
                setSuccess(true); // Set success to true after successful registration
                setError(""); // Clear any previous errors
                setName(""); // Clear input fields
                setEmail("");
                setPassword("");
                setCpassword("");
            } catch (error) {
                console.log(error);
                setError("An error occurred while registering. Please try again later.");
                setLoading(false); // Set loading to false in case of error
            }
        } else {
            setError("Passwords do not match");
        }
    }

    return (
        <div className="container mt-5">
            {loading && <Loader />} {/* Conditionally render Loader component when loading is true */}
            {error && <Error message={error} />} {/* Pass error message to Error component */}
           

            <div className="row justify-content-center">
                <div className="col-md-5">
                {success && <Success message="Registration success" />} {/* Pass success message to Success component */}
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Register</h2>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
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
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    value={cpassword}
                                    onChange={(e) => setCpassword(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-primary" onClick={register}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registerscreens;
