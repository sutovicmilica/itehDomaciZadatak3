import React from 'react'
import Red from './Red'

export default function Odgovor({ pokusaj }) {
  return (
    <Red className='border-top p-3 border-bottom'>
      <div className='col-10 d-flex justify-content-between'>
        <div>
          {pokusaj.prviBroj}
        </div>
        <div>
          {pokusaj.operacija.znak}
        </div>
        <div>
          {pokusaj.drugiBroj}
        </div>
        <div>
          =
        </div>
        <div>
          {pokusaj.resenje}
        </div>
        <div>
          -
        </div>
        <div>
          {pokusaj.tacan ? 'tacno' : 'netacno'}
        </div>
      </div>
    </Red>
  )
}
