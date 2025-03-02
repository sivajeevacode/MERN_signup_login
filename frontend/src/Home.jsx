import React from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const submit =()=>{
    alert("logout successfully")
    navigate('/register')

  }

  return (
    <div className='container'>
     <h2>Opportunities don't happen, you create them</h2>
     <button>Create Opportunities</button>
   
      <div className="logout">
           <button onClick={submit}>Logout</button>
      </div>

    </div>
  )
}

export default Home
