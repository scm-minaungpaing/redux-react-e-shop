import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Loading from '../components/Loading';
import ShowProducts from '../components/ShowProducts';

const Product = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([data]);
    const [loading, setLoading] = useState([false]);
    // let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products")
            // if (componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
            // }
            // return () => {
            //     componentMounted = false
            // }
        }
        getProducts()
    }, [])

    return (
        <>
            <Container className='my-5 py-3'>
                <Row>
                    <Col className='mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>LATEST PRODUCTS</h1>
                        <hr />
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    {loading ? <Loading /> : 
                    <ShowProducts 
                    products={data}
                    filterItem={filter} 
                    loading={loading}
                    setFilteritem={setFilter} 
                    setLoading={setLoading} 
                    />}
                </Row>
            </Container>
        </>
    )
}

export default Product