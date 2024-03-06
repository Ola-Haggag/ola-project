import React, { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Register = () => {

    return (
        <section className="form-section">
            <div className="container-login mt-5 rounded">
                <form>
                    <div className="row">
                        <div className="col">
                            <label>First Name</label>
                            <input type="text" className="form-control rounded" id="first-name" name="fname"></input>
                        </div>

                        <div className="col">
                            <label>Last Name</label>
                            <input type="text" className="form-control rounded" id="last-name" name="lname"></input>
                        </div>
                    </div>

                    <label>Email</label>
                    <input type="email" id="email" className="rounded inp"></input>

                    <label className="form-label d-block mt-3">Password</label>
                    <input type="password" id="password" className="rounded inp mb-3"></input>


                    <Link to="/login" className="btn btn2 btn-primary d-block  mt-4 " id="sign-up">Sumbit</Link>
                </form>
            </div>
        </section>
    )
}
 export default Register;