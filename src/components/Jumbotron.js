import React from 'react'
import {Jumbotron as Jumbo, Container,Image,Row,Col} from 'react-bootstrap';
import styled from 'styled-components';
import adventureimg from '../assets/adventure.jpg';


const Styles = styled.div`
    .jumbo{
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed bottom;
        color: #ccc;
        height: 400px;
        position: relative;
        z-index: -2;
    }

    .overlay{
        background-color: #001;
        opacity:0.6;
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index: -1;

    }

    .imagen{
        height: 300px   ;
        weight: 300px   ;
    }

`;

export const Jumbotron = () => (

    <Styles>
        <Jumbo fluid className="jumbo">
        <Container>
        <Row>
            <Col xs={6} md={4}>
            <Image className="imagen" src={require('../assets/adventure.png')}  rounded />
            </Col>
        </Row>
        </Container>
            <div className="overlay">
            </div>   
        </Jumbo>
    </Styles>

)
