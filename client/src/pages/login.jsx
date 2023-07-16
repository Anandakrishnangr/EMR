import React, { useContext, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { UserContext } from '../App';

const Login = () => {
    let user = useContext(UserContext)
    console.log(user);
    let navigate = useNavigate()
    const [Error, setError] = useState('')
    const [Login, setLogin] = useState({
        Email: '',
        Password: ''
    })  

    const submit = () => {
        axios.post('/auth/login', { username: Login.Email, password: Login.Password }).then((res) => {
            localStorage.setItem('user', res.data.token.toString())
            localStorage.setItem('userName', res.data.username.toString())
            localStorage.setItem('role', res.data.role.toString())
            user.setUser((prev) => ({...prev, isAuthenticated: true }))
            navigate('/patient Home')
        }).catch((err) => {
            console.log(err.response);
            setError(err.response.data)
        })
    }

    return (
        <div className='p-md-5 p-4 vh-100 container '  >
            <div className='d-flex '>

                <div style={{ borderRadius: '25px' }} className='row  flex-grow-1 bg-light  '>
                    <div className='col-12 p-md-5 p-4 col-md-6'>
                        <div className='        '>
                            <h5 style={{ fontWeight: 800 }} className='text-center'>SIGN IN</h5>
                            <p >Welcome back! Please enter your credentials to access your account</p>
                            <div>
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input className='form-control'
                                    onChange={(e) => {
                                        setLogin({ ...Login, Email: e.target.value })
                                    }}
                                    id="exampleFormControlInput1" ></input>
                            </div>
                            <div className='mt-2'><label for="exampleFormControlInput2" class="form-label">Password</label>
                                <input className='form-control'
                                    onChange={(e) => {
                                        setLogin({ ...Login, Password: e.target.value })
                                    }}
                                    type='password' id="exampleFormControlInput2" ></input>
                            </div>
                            <p className='text-danger' >{Error}</p>
                            <button className='btn btn-success mt-2 w-100    ' onClick={() => submit()}  >SIGN IN</button>
                            <p>forgot password ?</p>
                            <p>Don't have an account ? Signup now !</p>
                        </div>
                    </div>

                    <div className='col-6 p-3  d-none    d-md-block col-md-6' >
                        <div style={{ borderRadius: '25px' }} className='loginCover h-100'></div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login