import React, {useState} from 'react'
import {Form, Button, Alert} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { inputs } from '../../actions/inputActions';

function VariableInputForm(props) {
    const dispatch = useDispatch();
    
    const [arrivalTime, setArrivalTime] = useState('');
    const [burstTime, setBurstTime] = useState('');
    const [timeQuantum, setTimeQuantum] = useState('');
    const [priorities, setPriority] = useState('');

    const [alertbox, setAlertbox] = useState('');

    const handleArrivalChange = (e) => setArrivalTime(e.target.value);
    const handleBurstChange = (e) => setBurstTime(e.target.value);
    const handleTimeQuantumChange = (e) => setTimeQuantum(e.target.value);
    const handlePriorityChange = (e) => setPriority(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const arrivalTimeArr = arrivalTime.trim().split(/\s+/).map((at) => parseInt(at));
        const burstTimeArr = burstTime.trim().split(/\s+/).map((bt) => parseInt(bt));    
        const timeQuantumInt = parseInt(timeQuantum);
        let prioritiesArr = priorities.trim().split(/\s+/).map((p) => parseInt(p));
        
        //condition checks
        if(burstTimeArr.includes(0)){
            setAlertbox('0 Burst Time is invalid for any process!');
            return;
        } else if (arrivalTimeArr.length !== burstTimeArr.length){
            setAlertbox('Number of arrival times and burst times do not match');
            return;
        } else if ( arrivalTimeArr.includes(NaN) || burstTimeArr.includes(NaN) || (props.nameOfAlgo==='RR' && isNaN(timeQuantumInt)) ){
            setAlertbox('Please enter only integers');
            return;
        } else if (arrivalTimeArr.some((t) => t<0) || burstTimeArr.some((t) => t<0) ){
            setAlertbox('Negative numbers are invalid');
            return;
        }

        if(props.nameOfAlgo==='NPP' || props.nameOfAlgo==='PP'){
            if(priorities.trim() === ''){
                prioritiesArr = arrivalTimeArr.map(() => 0);
            } else if (prioritiesArr.length!==arrivalTimeArr.length){
                setAlertbox('Arrival Times, Burst Times and Priorities should have equal length');
                return;
            }
        }

        //if everything's correct
        setAlertbox('');
        console.log(props.nameOfAlgo)
        dispatch(
            //thunk
            inputs(
                props.nameOfAlgo,
                arrivalTimeArr,
                burstTimeArr,
                timeQuantumInt,
                prioritiesArr,
            )
        );
    }
  return (
    <>
        <Form.Group className='mb-3'>
            <Form.Label> Arrival Time </Form.Label>
            <Form.Control type="text" placeholder='eg: 1 4 6 7' onChange={handleArrivalChange}></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
            <Form.Label> Burst Time </Form.Label>
            <Form.Control type="text" placeholder='eg: 1 4 6 7' onChange={handleBurstChange}></Form.Control>
        </Form.Group>

        {props.nameOfAlgo==='RR' && (
            <Form.Group className='mb-3'>
                <Form.Label> Time Quantum </Form.Label>
                <Form.Control type="text" placeholder='eg: 3' onChange={handleTimeQuantumChange} ></Form.Control>
            </Form.Group>
        )}

        {(props.nameOfAlgo==='NPP' || props.nameOfAlgo==='PP') && (
            <Form.Group className='mb-3'>
            <Form.Label> Priorities </Form.Label>
            <Form.Control type="text" onChange={handlePriorityChange} ></Form.Control>
        </Form.Group>
        )}

        {alertbox !== '' && <Alert variant='danger'>{alertbox}</Alert>}
        <Button variant='primary' type='submit' style={{marginTop: '20px'}} onClick={handleSubmit} >
            Submit
        </Button>
    </>
  )
}

export default VariableInputForm
