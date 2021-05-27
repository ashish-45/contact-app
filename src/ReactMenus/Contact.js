import React, { useState } from 'react'

const Contact = () => {

    const [data,setData]= useState({
        fullname:'',
        num:'',
        mail:'',
        msg:''
    });

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My Name is ${data.fullname}`)
    }

    const handleChange = (event) => {
       const {name,value} = event.target;

       setData((preVal) => {
           return {
               ...preVal,
               [name] : value,
           }
       })

    }

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact US</h1>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form>
                            <form onSubmit={formSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">FullName</label>
                                    <input type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        name='fullname'
                                        value={data.fullname}
                                        onChange={handleChange}
                                        placeholder="Enter Your Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput2">Phone</label>
                                    <input type="number"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        name='num'
                                        value={data.num}
                                        onChange={handleChange}
                                        placeholder="Mobile Number"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput3">Email address</label>
                                    <input type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        name='mail'
                                        value={data.mail}
                                        onChange={handleChange}
                                        placeholder="name@example.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        name='msg'
                                        value={data.msg}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className='col-12'>
                                    <button className='btn btn-outline-primary' type='submit'>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Contact;
