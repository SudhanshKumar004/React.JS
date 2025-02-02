
import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cards = () => {
  return (
    <>
  
    <Container>
    <h1 className='head1' ><a href="">Different Galaxies</a></h1>
    <Row>
        <Col>
        <Card style={{ width: '16rem' , boxShadow:"0 0 5px black , 0 0 10px silver" }}>
      <Card.Img variant="top" src="/images/milkyway.jpg" style={{height:"220px"}} />
      <Card.Body>
        <Card.Title>Milky Way</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Have a Look</Button>
      </Card.Body>
    </Card>
        </Col>


        <Col>
        <Card style={{ width: '16rem' , boxShadow:"0 0 5px black , 0 0 10px silver" }}>
      <Card.Img variant="top" src="/images/andromeda.jpg" style={{height:"220px"}} />
      <Card.Body>
        <Card.Title>Andromeda</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Have a Look</Button>
      </Card.Body>
    </Card>
        </Col>


        <Col>
        <Card style={{ width: '16rem' , boxShadow:"0 0 5px black , 0 0 10px silver" }}>
      <Card.Img variant="top" src="/images/whirl.jpg" style={{height:"220px"}} />
      <Card.Body>
        <Card.Title>Whirl Pool</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Have a Look</Button>
      </Card.Body>
    </Card>
        </Col>


        <Col>
        <Card style={{ width: '16rem' , boxShadow:"0 0 5px black , 0 0 10px silver", marginTop:"20px"}}>
      <Card.Img variant="top" src="/images/black.jpg" style={{height:"220px"}} />
      <Card.Body>
        <Card.Title>Black Eye</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Have a Look</Button>
      </Card.Body>
    </Card>
        </Col>
     

      </Row>
    </Container>
    
    
    </>
  )
}

export default Cards