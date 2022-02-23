import React from 'react'
import { Card } from 'react-bootstrap'
import Product from './Products';

export const Home = () => {
    return (
        <>
            <div className='hero'>
                <Card className="bg-dark text-white border-0">
                    <Card.Img src="./assets/img/hero.jpg" alt="Card image" />
                    <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-end px-5'>
                        <Card.Title className='display-3 fw-bolder mb-0'>NEW SEASON ARRIVAL</Card.Title>
                        <Card.Text className='fs-2'>
                            CHECKOUT ALL THE TRENDS
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <Product />
        </>
    )
}
