import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Latestcard = () => {
  return (
    <>
  
    <Container>
    <h1 className='head1' ><a href="">Watch Lastest Anime</a></h1>
    <Row>
        <Col>
        <Card className='anshul' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/c1.jpg" style={{height:"320px"}} />
      <Card.Body>
        <Card.Title>One Piece</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Watch Now</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/c2.jpg" style={{height:"320px"}} />
      <Card.Body>
        <Card.Title>One Piece</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Watch Now</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/c3.jpg" style={{height:"320px"}} />
      <Card.Body>
        <Card.Title>One Piece</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Watch Now</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/c4.jpg" style={{height:"320px"}} />
      <Card.Body>
        <Card.Title>One Piece</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Watch Now</Button>
      </Card.Body>
    </Card>
        </Col>
     

      </Row>

  
    
    


    </Container>
    
    
    </>
  )
}

export default Latestcard