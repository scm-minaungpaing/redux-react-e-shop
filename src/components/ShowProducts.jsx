import React from 'react'
import { Badge, Button, Card, Col, Row, NavLink } from 'react-bootstrap'

const ShowProducts = ({ products, filterItem, loading, setFilteritem, setLoading }) => {
    
    const filterProduct = (data) => {
        setLoading(true)
        const updateData = products.filter((x) => x.category === data)
        setTimeout(() => {
            setFilteritem(updateData) 
            setLoading(false)
        }, 500);
        
    }

    return (
        <>
            <div className='buttons d-flex justify-content-center mb-5'>
                <Button variant="outline-dark" className='me-2' onClick={() => setTimeout(() => setFilteritem(products), 500)}>ALL</Button>
                <Button variant="outline-dark" className='me-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</Button>
                <Button variant="outline-dark" className='me-2' onClick={() => filterProduct("women's clothing")}>Women's Clothing</Button>
                <Button variant="outline-dark" className='me-2' onClick={() => filterProduct("jewelery")}>Jewelery</Button>
                <Button variant="outline-dark" className='me-2' onClick={() => filterProduct("electronics")}>Electronic</Button>
            </div>
            <Row>
                {filterItem.map(item => {
                    return (
                        <Col className='col-3 p-4' key={item.id}>
                            <Card style={{minHeight:'500px'}}>
                                <Card.Img variant="top" src={item.image} height={'300px'}/>
                                <Card.Body>
                                    <Card.Title>{item.title.substring(0, 15) + "...."}</Card.Title>
                                    <Card.Text>
                                        {item.description.substring(0, 50) + " ....." }
                                    </Card.Text>
                                    <div className='d-flex justify-content-between'>                                        
                                        <Card.Text className='text-muted'>
                                            <Badge bg="secondary">{ item.category }</Badge>                                            
                                        </Card.Text>
                                        <Card.Text className='text-muted'>
                                            <span className='fw-bold'>Price</span>: ${ item.price }
                                        </Card.Text>
                                    </div>
                                    <NavLink href={`/product/${item.id}`}>
                                        <Button variant="outline-dark" className='w-100'>
                                            Buy Now
                                        </Button>
                                    </NavLink>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
                }
            </Row>
        </>
    )
}

export default ShowProducts