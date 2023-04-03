import React from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'


const CarDetails = () => {
  const { state: p } = useLocation()
  const navigate=useNavigate()
  return (
    <div className="container text-center ">
       <h3 className='mt-4'>{p?.name}</h3>
       <img src={p?.img} alt="img" className='rounded mt-3' width="500px"/>
       <h3 className='mt-3'>
       <span className='text-danger'>FUEL: </span>{p?.fuel}
       </h3>
       <h3 className='mt-3'>
        <span className='text-danger'>MODEL: </span> {p?.model}
        </h3>
       <button 
       onClick={()=> navigate("/cars")}
       className="btn btn-success mt-4">
        GO BACK
       </button>
    </div>
  )
}

export default CarDetails