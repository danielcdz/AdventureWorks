import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link{
        color: #bbb;
    
        &:hover {
            color: white;
        }
    }

`;

export const NavigationBar = () => (

    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">AdventureWorks2017</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/clientes">Clientes</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="productos">Productos</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/proveedores">Proveedores</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/vendedores">Vendedores</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/ventas">Ventas</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>

)
