import React from 'react'
import './_table.scss'

const precisionRound = (number, precision) => {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
};

function Table({value: solvedProcessesInfo}) {
  const total = (array) => array.reduce((prevValue, currValue) => prevValue + currValue, 0);
  const numberOfProcesses = solvedProcessesInfo.length;
  const turnaroundTime = solvedProcessesInfo.map((process) => process.tat);
  const waitingTime = solvedProcessesInfo.map((process) => process.wt)

  const totalTAT = total(turnaroundTime);
  const averageTAT = totalTAT / numberOfProcesses;

  const totalWT = total(waitingTime);
  const averageWT = totalWT / numberOfProcesses;

  return (
    <>
      <table class='rwd-table'>
        <thead>
          <tr>
            <td>Job</td>
            <td>Arrival Time</td>
            <td>Burst Time</td>
            <td>Completion Time</td>
            <td>Turn Around Time</td>
            <td>Waiting Time</td>
          </tr>
        </thead>
        <tbody>
          {solvedProcessesInfo.map((item, index) => (
            <tr key={`process-row-${item.job}`}>
              <td>{item.job}</td>
              <td>{item.at}</td>
              <td>{item.bt}</td>
              <td>{item.ct}</td>
              <td>{item.tat}</td>
              <td>{item.wt}</td>
            </tr>
          ))}
          {
            <tr>
              <td colSpan={4} style={{ textAlign: 'right' }}>
                Average
              </td>
              <td>
                {totalTAT} / {numberOfProcesses} ={' '}
                {precisionRound(averageTAT, 3)}
              </td>
              <td>
                {totalWT} / {numberOfProcesses} ={' '}
                {precisionRound(averageWT, 3)}
              </td>
            </tr>
          }
        </tbody>
      </table>
    </>
  );
}

export default Table
