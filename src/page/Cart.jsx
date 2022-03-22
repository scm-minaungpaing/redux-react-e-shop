import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector((state) => state.handleCart)
  return (
    <>
      <Container>
        <h3 className='text-center py-3'>Shopping Cart List</h3>
        <Row>
          <Col className='col-sm-9'>
            {cart.map((item, index) => (
                <Card key={index} className='mb-3'>
                  <Card.Header>Item ({index})</Card.Header>
                  <Card.Body>
                    <Row>
                      <Col className='col-3'>
                        <Card.Img src={item.image} alt="Card image" />
                      </Col>
                      <Col>
                        <Card.Title className='fw-bold fs-6'>{item.title}</Card.Title>
                        <Card.Text>
                          Price: <span className='fw-bold'>${ item.price}</span> <br/>
                          Quantity: <span className='fw-bold'>${ item.qty}</span>
                        </Card.Text>
                        <Button variant="outline-dark">Remove</Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
            )
            )}
          </Col>
          <Col>
              <Card>
                <Card.Header className='fw-bold fs-6'>TOTAL PRICE</Card.Header>
                <Card.Body>
                  
                  <Card.Title>Title</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>                   
                </Card.Body>
              </Card>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default Cart