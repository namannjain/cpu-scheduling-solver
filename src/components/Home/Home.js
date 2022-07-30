import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import AlgoForm from '../Input/AlgoForm'
import OutputForm from '../Output/OutputForm'
import './home.css'

function Home() {
  return (
    <>
        <Container className="main">
            <h1 className="main_heading"> CPU SCHEDULING SOLVER </h1>
            <Row>
                <Col lg={4}>
                    <AlgoForm/>
                </Col>
                <Col lg={8}>
                    <OutputForm/>
                </Col>
            </Row>
        </Container>
        <footer>
            Made by Naman Jain |{' '}
            <a 
                style={{color: 'black', textDecoration: 'none'}} 
                href="https://github.com/namannjain/cpu-scheduling-solver" 
            > 
                Github 
            </a>
        </footer>
    </>
  )
}

export default Home