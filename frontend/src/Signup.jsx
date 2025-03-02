import React, { useState } from 'react'
import './Signup.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    const submit =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/signup",{email,password})
        .then((user)=>{
            console.log(user.data)
            alert(user.data)
            if(user.data === "login successfully")
            {
                navigate("/home")
            }
            

        }).catch((err)=>{
            console.log("error founded",err)
        })
    }

    return (
        <div className='signup'>
            <div className="box">
                <form onSubmit={submit}>
                    <h2>Login</h2>
                    <div className="input-group">
                        <label >Email</label>
                        <input type="email" placeholder='Enter email' required  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <div className="input-group">
                        <label >Password</label>
                        <input type="password" placeholder='Enter password' required  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    <button>Login</button>
                </form>
                <div className="login">
                    <p>Already Have an Account</p>
                    <Link to={'/register'} >
                        <button>Register</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Signup
