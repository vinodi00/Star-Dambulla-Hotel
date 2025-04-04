import React from 'react';

function Success() {
    const message = "Register Sucess";
    return (
        <div>
            <div className="alert alert-success" role="alert">
                {message}
            </div>
        </div>
    );
}

export default Success;
