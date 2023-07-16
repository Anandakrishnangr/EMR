import React from 'react'

const Feedback = () => {
  return (
    <div className='container mt-4'><h2>Feedback </h2><div>
    <label for="exampleFormControlInput1" class="form-label">EMAIL</label>
    <input className='form-control' id="exampleFormControlInput1" ></input>
</div>
<div>
    <label for="exampleFormControlInput2" class="form-label">NAME</label>
    <input className='form-control' id="exampleFormControlInput2" ></input>
</div>
<div>
    <label for="exampleFormControlInput3" class="form-label">COMMENTS</label>
    <input className='form-control' id="exampleFormControlInput3" ></input>
</div>
<button className='btn btn-success'>submit</button>
</div>
    
  )
}

export default Feedback