
import React from 'react'
import programmer from '../images/programmer.jpg'; 
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <div>
            <section id='header' className='d-flex align-items-center' style={{ marginTop: '200px' }}>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>

                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                     <h1>{props.name}</h1>
                                    <h4 className='my-3' style={{ color: '#484848' }}>
                                        work with us and improve your knowledge
                                </h4>
                                    <div className='mt-3'>
                                        <NavLink to={props.visit}>
                                             <button className='btn btn-outline-primary' style={{ borderRadius: '20px', padding: '10px 30px' }}></button>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src='' className='img-fluid' alt='ashish' style={{ height: '300px' }} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Common;
