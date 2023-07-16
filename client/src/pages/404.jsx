import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound404 = () => {
    let navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 2000);
        return () => {

        }
    }, [])


    return (
        <div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center ' >
            <div>
         
            <div>
                <h1>PAGE NOT FOUND !</h1>
            </div>

            <div>
                <p className='text-center text-danger' >You are being redirected !</p>
            </div>
            </div>

        </div>
    )
}

export default NotFound404