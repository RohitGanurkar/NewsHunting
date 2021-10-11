import React from 'react'
import Loading from './Loading.gif'

const Loader = () =>{
    return (
        <div className="text-center mt-4 mb-4">
            <img className="my-3" src={Loading} alt="LOADING" />
        </div>
    )
}

export default Loader
