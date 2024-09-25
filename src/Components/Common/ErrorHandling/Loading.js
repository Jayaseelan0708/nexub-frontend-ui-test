import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (

        <div className="d-flex justify-content-center align-items-center  vh-100">
            <div>
                <Spinner
                    animation="border"
                    role="status"
                    style={{ color: '#00C1D4', width: '2rem', height: '2rem' }}
                    className='mx-2'
                >

                </Spinner>
            </div>

            <div style={{ color: '#00C1D4', width: '2rem', height: '2rem' }}>
                <span className='fw-bold fs-2'>Loading...</span>
            </div>


        </div>
    );
};

export default Loading;