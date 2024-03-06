import React, { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Login = ({setUserName}) => {
    const inputRef = useRef()

    const takeName = () => {
        const value = inputRef.current.value
        setUserName(value)
    }
    return (
        <section className="form-section">
            <div className="container-login mt-5 rounded">

                <form>
                    <label>UserName</label>
                    <input type="text" ref={inputRef} id="username" className="rounded inp"></input>

                    <span >Do You have an account?</span><Link style={{textDecoration : 'none'}} to="/register"> Register</Link>

                    <label className="d-block mt-3">Password</label>
                    <input type="password" id="password" className="rounded inp mb-3"></input>
                    
                    <div className="form-check">
                        <label className="form-check-label" style={{display : 'inline-block'}}>
                            <input className="form-check-input" type="checkbox" name="remember"/> Remember me
                        </label>
                    </div>
                    <Link to="/" onClick={takeName} className="btn btn1 btn-primary d-block  mt-3 " id="sign-in" >Sumbit</Link>
                </form>

            </div>
        </section>
    )
}
 export default Login;