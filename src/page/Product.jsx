import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action'
import { Badge, Button, Col, Container, Row, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading';
import { Link } from 'react-router-dom'

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
    }, [])

    const ProductDetail = () => {
        return (
            <>
                <Col className='col-4'>
                    <img src={product.image} alt={product.title} height="auto" className='w-100' />
                </Col>
                <Col className='col-8 py-5'>
                    <h4 className='text-uppercase text-black-50'>
                        <Badge bg="secondary">{product.category}</Badge>
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bolder'>
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        $ {product.price}
                    </h3>
                    <p className='lead'>{product.description}</p>
                    <div className='d-flex align-item-center'>
                        <Nav.Link as={Link} to="/product">
                            <Button variant="outline-dark">
                                <i className="fa-solid fa-backward me-2"></i>Back
                            </Button>
                        </Nav.Link>
                        <Nav.Link>
                            <Button variant='outline-dark' onClick={() => addProduct(product)}>
                                <i className="fa-solid fa-cart-plus me-2"></i>Add to Cart
                            </Button>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/cart">
                            <Button variant='outline-dark'>
                                <i className="fas fa-shopping-cart me-2"></i>Go to Cart
                            </Button>
                        </Nav.Link>
                    </div>
                </Col>
            </>
        )
    }
    return (
        <Container className='mt-5'>
            <Row>
                {loading ? <Loading /> : <ProductDetail />}
            </Row>
        </Container>
    )
}

export default Product