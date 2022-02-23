import React, { useState, useEffect } from 'react'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)


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
                    <Button variant='outline-dark' className='me-3'>
                        <i className="fa-solid fa-cart-plus me-2"></i>Add to Cart
                    </Button>
                    <Button variant='outline-dark' className='me-3'>
                        <i className="fas fa-shopping-cart me-2"></i>Go to Cart
                    </Button>
                </Col>
            </>
        )
    }
    return (
        <Container className='mt-3'>
            <Row>
                {loading ? <Loading /> : <ProductDetail />}
            </Row>
        </Container>
    )
}

export default Product