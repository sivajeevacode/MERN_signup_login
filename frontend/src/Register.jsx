import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/register', { name, email, password })
            .then((user) => {
                console.log(user.data)
                alert(user.data)
                if (user.data === "successfully registerd") {
                    navigate('/signup')
                }


            }).catch((err) => {
                console.log('error founded', err)
            })
    }


    return (
        <div className='register'>
            <div className="box">
                <form onSubmit={submit}>
                    <h2>Register</h2>
                    <div className="input-group">
                        <label >Name</label>
                        <input type="text" placeholder='Enter name' required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="input-group">
                        <label >Email</label>
                        <input type="email" placeholder='Enter email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="input-group">
                        <label >Password</label>
                        <input type="password" placeholder='Enter password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button>Register</button>
                </form>
                <div className="login">
                    <p>Already Have an Account</p>
                    <Link to={'/signup'} >
                        <button>Login</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Register
