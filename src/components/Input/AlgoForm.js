import React, { useState } from 'react'
import {Form} from 'react-bootstrap'
import VariableInputForm from './VariableInputForm';

function AlgoForm() {
  const [algo, setAlgo] = useState('FCFS');
  const handleChange = (e) => {
    setAlgo(e.target.value)
  }
  return (
    <>
      <Form
        style={{
          backgroundColor: '#fff',
          padding: '100px 30px',
          borderRadius: 25,
          boxShadow: '5px 6px 10px'
        }}  
      >
        <Form.Group className='mb-3'>
            <Form.Label> Select Algorithm </Form.Label>
            <Form.Select value={algo} onChange={handleChange} >
              <option value='FCFS'> First Come First Serve (FCFS) </option>
              <option value='SJF'> Shortest Job First (SJF) </option>
              <option value='SRTF'> Shortest Remaining Time First (SRTF) </option>
              <option value='RR'> Round Robin (RR) </option>
              <option value='NPP'> Non Pre-emptive Priority (NPP)</option>
              <option value='PP'> Pre-emptive Priority (PP) </option>
            </Form.Select>
          </Form.Group>

          <VariableInputForm nameOfAlgo={algo} />   
      </Form>
    </>
  )
}

export default AlgoForm
