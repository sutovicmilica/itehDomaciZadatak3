import React from 'react'
import Odgovor from './Odgovor'

export default function Odgovori({ pokusaji, onReset }) {
  return (
    <div className='container mt-2 '>
      <div className='row mb-4'>
        <div className='col-11'>
          <h1 className='text-center'>Vasi odgovori</h1>
        </div>
        <div className='col-1'>
          <button onClick={onReset} className='btn btn-danger form-control'>Reset</button>
        </div>
      </div>
      {
        pokusaji.slice().reverse().map((element, index) => {
          return (
            <Odgovor pokusaj={element} key={index} />
          )
        })
      }
    </div>
  )
}
