import React, { useState } from 'react'
import HeaderPublic from '../components/headerPublic'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const DoctorRegister = () => {
    let navigate = useNavigate()
    const [Error, setError] = useState('')
    const [Data, setData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Gender: '',
        Address: '',
        MobileNo: '',
    })

    const submit = () => {
        axios.post('/register/registerDoctor', { data: Data }).then((res) => {
            localStorage.setItem('user', res.data.toString())
            navigate('/Dashboard')
        }).catch((err) => {
            setError(err.response.data)
        })
    }
    return (
        <>
            <HeaderPublic />
            <div className='container mt-5 pt-5 '>
                <div className='card p-3 mt-3'>
                    <h1 className='py-2 text-center' style={{ fontWeight: '600' }} >Doctor Register</h1>
                    <div className='my-2' >
                        <label for="exampleFormControlInput1" class="form-label">First Name</label>
                        <input className='form-control' id="exampleFormControlInput1" onChange={(e) => setData({ ...Data, FirstName: e.target.value })} ></input>
                    </div>
                    <div className='my-2' >
                        <label for="exampleFormControlInput15" class="form-label">Last Name</label>
                        <input className='form-control' id="exampleFormControlInput15" onChange={(e) => setData({ ...Data, LastName: e.target.value })} ></input>
                    </div>
                    <div className='my-2' >
                        <label for="exampleFormControlInput2" class="form-label">Email</label>
                        <input className='form-control' id="exampleFormControlInput2" onChange={(e) => setData({ ...Data, Email: e.target.value })} ></input>
                    </div>
                    <div className='my-2' >
                        <label for="exampleFormControlInput3" class="form-label">Address</label>
                        <textarea className='form-control' id="exampleFormControlInput3" onChange={(e) => setData({ ...Data, Address: e.target.value })} ></textarea>
                    </div>
                    <div className='my-2' >
                        <label for="exampleFormControlInput10" class="form-label">Experience</label>
                        <input className='form-control' id="exampleFormControlInput10" onChange={(e) => setData({ ...Data, Experience: e.target.value })} ></input>
                    </div>

                    <div className='my-2' >
                        <label for="exampleFormControlInput1" class="form-label">Age</label>
                        <input className='form-control' id="exampleFormControlInput1" onChange={(e) => setData({ ...Data, Age: e.target.value })} ></input>
                    </div>
                    <div className='my-2' >
                        <label for="exampleFormControlInput1" class="form-label">Mobile</label>
                        <input className='form-control' id="exampleFormControlInput1" onChange={(e) => setData({ ...Data, MobileNo: e.target.value })} ></input>
                    </div>
                    <p>{Error}</p>
                    <button className='btn btn-success mt-2 ' onClick={() => submit()} >Register</button>
                </div>
            </div>
        </>
    )
}

export default DoctorRegister