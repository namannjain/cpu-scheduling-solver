import React from 'react'
import {useSelector} from 'react-redux'
import { solve } from '../../helper/solve' 
import Table from './Table'

function OutputForm() {
  const {
    nameOfAlgo: selectedAlgo,
    arrivalTime, 
    burstTime, 
    timeQuantum, 
    priority: priorities,
  } = useSelector((state) => state.inputs)

  if(!arrivalTime.length || !burstTime.length){
    return (
      <div
        style={{
          margin: '30px 10px',
          // backgroundColor: '#b8b09f',
          backgroundColor: 'rgb(237,242,242)',
          padding: '10px 30px',
          borderRadius: 10,
          minHeight: '50px',
          boxShadow: '5px 5px 10px ',
        }}
      >
        <div>
          <p style={{fontSize: 35}} > Output </p>
        </div>
        <p style={{fontSize: 18}} > Table will be shown here... </p>
      </div>
    );
  } else {
    const {solvedProcessesInfo} = solve(
      selectedAlgo,
      arrivalTime,
      burstTime,
      timeQuantum,
      priorities
    )
    return (
      <>
        <div
          style={{
            margin: '40px 5px',
            backgroundColor: 'rgb(237,242,242)',
            padding: '10px 30px',
            borderRadius: 10,
            minHeight: '600px',
            boxShadow: '5px 5px 10px ',
          }}
        >
          <h1> Output </h1>
          <p style={{marginTop: '20px', fontSize: '20px'}} > 
            You chose {selectedAlgo} CPU Scheduling Algorithm 
          </p>
          <Table value={solvedProcessesInfo} />
        </div>
      </>
    )
  }
  
}

export default OutputForm
