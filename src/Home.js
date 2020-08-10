import React from 'react';
import {Container, Row,Col,Card,Button,ListGroup} from 'react-bootstrap';


export const Home = () => (
        <div>
            <h4>Sistema de consulta a la base de datos  AdventureWorks2017</h4>
            <hr></hr>
            <p>Este sistema muestra al usuario información de la base de datos AdventureWorks2017 separada en diferentes módulos los cuales son:</p>
            <ListGroup>
                <ListGroup.Item  variant="info">- Clientes</ListGroup.Item>
                <ListGroup.Item variant="info">- Productos</ListGroup.Item>
                <ListGroup.Item variant="info">- Proveedores</ListGroup.Item>
                <ListGroup.Item variant="info">- Vendedores</ListGroup.Item>
                <ListGroup.Item variant="info">- Ventas</ListGroup.Item>
            </ListGroup>
            <br></br>
           <br></br>
            <h4>Información general de AdventureWorks2017</h4>
            <hr></hr>
            <Container>
                <Row>              
                    <Col xs={6} md={4}>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Clientes registrados</Card.Title>
                            <Card.Text>
                            AdventureWorks2017 tiene un total de Clientes registrados  de: <strong>4545</strong>
                             </Card.Text>
                            <Button variant="info" href="/clientes" href="/clientes">Más información</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Productos registrados</Card.Title>
                            <Card.Text>
                            AdventureWorks2017 tiene un total de Productos registrados  de: <strong>4545</strong>
                            </Card.Text>
                            <Button variant="info" href="/productos">Más información</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Proveedores registrados</Card.Title>
                            <Card.Text>
                            AdventureWorks2017 tiene un total de Proveedores registrados  de: <strong>4545</strong>
                            </Card.Text>
                            <Button variant="info" href="/proveedores">Más información</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br></br>
                <Row> 
                <Col xs={6} md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Vendedores registrados</Card.Title>
                            <Card.Text>
                            AdventureWorks2017 tiene un total de Vendedores registrados  de: <strong>4545</strong>
                            </Card.Text>
                            <Button variant="info" href="/vendedores">Más información</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Ventas realizadas</Card.Title>
                            <Card.Text>
                            AdventureWorks2017 tiene un total de Ventas registradas de: <strong>4545</strong>
                            </Card.Text>
                            <Button variant="info" href="/ventas">Más información</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> 
            <br></br>   
            <br></br>
            <br></br>   
        </div>
    )

