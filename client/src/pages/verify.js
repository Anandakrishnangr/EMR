import React from 'react'
import { Link } from 'react-router-dom'
import HeaderPublic from '../components/headerPublic'

const Verify = () => {
  return (<>
    <HeaderPublic/>
    <div className='container mt-5 pt-5 '
    
    >
      
      <h1 className='text-center'>Verify</h1> <div>
   <br/>
    <p className='text-center ' style={{fontWeight:'600'}} >Are you a  <Link to="/doctorRegister">Doctor</Link> or  <Link to="/userRegiteration">patient </Link>?</p>
   
</div>
</div>
</>
  )
}

export default Verify