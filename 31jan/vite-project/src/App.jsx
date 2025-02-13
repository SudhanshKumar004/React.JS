// import React, { useState } from 'react'
// import Cybrom from './pages/Cybrom'
// import myimg from './images/dashbg.jpg'
// import  {Container } from 'react-bootstrap'
// import img1 from './images/dashbg.jpg'
// import img2 from './images/huracan.jpeg'
// import img3 from './images/urus.jpeg'

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {

  return (
    <>
    {/* <h1 className='apphead'>welcome to app page</h1> */}
    {/* <Cybrom />
    <img src={myimg}                   height="200px" width="300px" />
    <img src="public/image/roma.jpeg"  height="200px" width="300px" /> */}
      {/* <Container classNameName='border'>
        <h1>Cybrom</h1>
      </Container> */}

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>





<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img2} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img3} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="cars">
<Card style={{ width: '18rem' }}>
        <img src={img2} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
<Card style={{ width: '18rem' }}>
        <img src={img2} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
<Card style={{ width: '18rem' }}>
        <img src={img2} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div> */}

    <Container>
      <Row>
        <Col className='bg-primary' md={2}>1 of 1</Col>
        <Col className='bg-success' md={2}>1 of 1</Col>
        <Col className='bg-danger' md={6}>1 of 1</Col>
        <Col className='bg-secondary' md={2}>1 of 1</Col>
      </Row>

      <Row>
        <Col className='bg-success' md={2}>1 of 1</Col>
        <Col className='bg-primary' md={2}>1 of 1</Col>
        <Col className='bg-info' md={4}>1 of 1</Col>
        <Col className='bg-danger' md={2}>1 of 1</Col>
        <Col className='bg-warning' md={2}>1 of 1</Col>
      </Row>
      <Row>
        <Col className='bg-primary' md={3}>1 of 1</Col>
        <Col className='bg-success' md={3}>1 of 1</Col>
        <Col className='bg-info' md={3}>1 of 1</Col>
        <Col className='bg-warning ' md={3}>1 of 1</Col>
      </Row>
    </Container>
    </> 
  )
}

export default App
 