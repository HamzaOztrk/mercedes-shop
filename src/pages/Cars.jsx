import React from 'react'
import {data} from "../helper/data"

import { useNavigate } from 'react-router-dom'


const Cars = () => {
  const navigate= useNavigate()
  return (
    <div className="container text-center mt-4">
      <h1 className='m-3'>CLİCK PHOTOS FOR MORE İNFORMATİON</h1>
    <div className="row justify-content-center g-5">
      {data?.map((p)=>{
        const {id,name,img}=p
        return (
          <div key={id} className='col-sm-12 col-md-6 col-lg-4' type='button' onClick={()=> navigate(`${id}`,{state:p})}>
              <img src={img} alt="img" width="400px" className='rounded'/>
              <h3>{name}</h3>
          </div>
        )})}
      

    </div>
    </div>
  )
}

export default Cars