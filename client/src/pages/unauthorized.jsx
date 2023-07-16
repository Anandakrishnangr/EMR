import React from 'react'

const Unauthorized = () => {
    return (
        <div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center ' >
            <div>
                <div>
                    <h1>Unauthorized 401 !</h1>
                </div>
                <div>
                    <p className='text-center text-danger' >You are being redirected !</p>
                </div>
            </div>

        </div>
    )
}

export default Unauthorized