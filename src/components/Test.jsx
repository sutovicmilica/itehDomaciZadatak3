import React, { useState } from 'react'
import { operacije } from '../util';
import Red from './Red';

function randomBroj(max) {
  return Math.floor(Math.random() * max);
}

export default function Test({ onSubmit }) {

  const [prviBroj, setPrviBroj] = useState(randomBroj(1500));
  const [drugiBroj, setDrugiBroj] = useState(randomBroj(1500));
  const [resenje, setResenje] = useState('');
  const [disabled, setDisabled] = useState(false)
  const [indexOperacije, setIndexOperacije] = useState(randomBroj(operacije.length));
  return (
    <div className='container mt-2'>
      <h1 className='text-center'>Kviz</h1>

      <Red>
        <div className='col-2'>
          {prviBroj} {operacije[indexOperacije].znak} {drugiBroj} =
        </div>
        <div className='col-2'>
          <input disabled={disabled} value={resenje} onChange={e => {

            setResenje(e.currentTarget.value);
          }} type='number' className='form-control' />
        </div>

      </Red>
      <Red>
        <div className='col-5'>
          <button onClick={() => {
            const res = operacije[indexOperacije].operacija(prviBroj, drugiBroj);
            alert('Vas odgovor je ' + ((res === Number(resenje)) ? 'tacan' : 'netacan'));
            if (res === Number(resenje)) {
              setDisabled(true);
            }
            onSubmit({
              prviBroj,
              drugiBroj,
              resenje: Number(resenje),
              operacija: operacije[indexOperacije]
            })
          }} disabled={disabled} className='btn btn-primary form-control'>Proveri</button>
        </div>
      </Red>
      <Red>
        <div className='col-3'>
          <button disabled={disabled} onClick={() => {
            setDisabled(true);
            setResenje(operacije[indexOperacije].operacija(prviBroj, drugiBroj))
          }} className='btn btn-danger form-control'>Vidi tacan odgovor</button>
        </div>
        <div className='col-2'>
          <button onClick={() => {
            setPrviBroj(randomBroj(1500));
            setDrugiBroj(randomBroj(1500));
            setIndexOperacije(randomBroj(operacije.length));
            setDisabled(false);
          }} className='btn btn-secondary form-control'>Promeni pitanje</button>
        </div>
      </Red>
    </div>
  )
}
