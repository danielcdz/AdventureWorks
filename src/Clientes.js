import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {Container, Row,Col,InputGroup,FormControl,Button,Table} from 'react-bootstrap';

export const Clientes = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <div>
            <h4> Módulo de Clientes\AdventureWorks2017</h4>
            <p>Este es el módulo de Clientes de AdventureWorks2017, aquí se puede encontrar y visualizar información acerca de las clientes de manera más concreta.</p>
            <hr></hr>
            <br></br>
            <h5> Búsqueda de clientes por filtros</h5>
            <hr></hr>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Row>              
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="personId">ID Cliente</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    type="number"
                                    name="personId"
                                    ref={register}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="nombreCliente">Nombre Cliente</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="nombreCliente"
                                 ref={register}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="territorioID">ID Territorio</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                type="number"
                                 name="territorioID"
                                 ref={register}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                    <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="nombreTerritorio">Nombre Territorio</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="nombreTerritorio"
                                 ref={register}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="idProducto">ID Producto</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="idProducto"
                                 type="number"
                                 ref={register}
                                />
                            </InputGroup>
                        </Col>
                    </Row>                  
                    <Button variant="info" type="submit" >Buscar</Button>
                </Container> 
            </form>
            <br></br>
            <hr></hr>
            <Table responsive striped bordered hover size="sm" variant="dark" >
                <thead>
                    <tr>
                    <th>NombreCliente</th>
                    <th>IDTerritorio</th>
                    <th>NombreTerritorio</th>
                    <th>IDProducto</th>
                    <th>NombreProducto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>mm</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

    

    </div>
)}
