import React from 'react'
import HeaderPublic from '../components/headerPublic'


const UserRegister = () => {

  return (
    <><HeaderPublic />
      <div className='container mt-5 pt-5 '>
        <div className='card p-3 mt-3'>
          <h1 className='py-2 text-center' style={{ fontWeight: '600' }} >User Register</h1>
          <div className='my-2' >
            <label for="exampleFormControlInput1" class="form-label">First Name</label>
            <input className='form-control' id="exampleFormControlInput1" ></input>
          </div>
          <div className='my-2' >
            <label for="exampleFormControlInput2" class="form-label">Email</label>
            <input className='form-control' id="exampleFormControlInput2" ></input>
          </div>
          <div className='my-2' >
            <label for="exampleFormControlInput3" class="form-label">Address</label>
            <textarea className='form-control' id="exampleFormControlInput3" ></textarea>
          </div>
          <div className='py-2'>
          <label>Gender</label>
          <div className='row ps-4'>
            <div class=" col-auto form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label class="form-check-label" for="flexRadioDefault1">
                male
              </label>
            </div>
            <div class="col-auto   form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
              <label class="form-check-label" for="flexRadioDefault2">
                female
              </label>
            </div>
            </div>
          </div>
          <div className='my-2' >
            <label for="exampleFormControlInput1" class="form-label">Age</label>
            <input className='form-control' id="exampleFormControlInput1" ></input>
          </div>
          <div className='my-2' >
            <label for="exampleFormControlInput1" class="form-label">Mobile</label>
            <input className='form-control' id="exampleFormControlInput1" ></input>
          </div>
          <button className='btn btn-success mt-2' >Register</button>
        </div>
      </div>
    </>
  )
}

export default UserRegister