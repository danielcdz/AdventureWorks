import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {Container, Row,Col,InputGroup,FormControl,Button,Table} from 'react-bootstrap';


export const Proveedores = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <div>
            <h4> Módulo de Proveedores\AdventureWorks2017</h4>
            <p>Este es el módulo de Proveedores de AdventureWorks2017, aquí se puede encontrar y visualizar información acerca de las Proveedores de manera más concreta.</p>
            <hr></hr>
            <br></br>
            <h5> Búsqueda de Proveedores por filtros</h5>
            <hr></hr>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Row>              
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="nombreVendedor">Nombre Vendedor</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name="nombreVendedor"
                                    ref={register}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="nombreShipMetod">Nombre método envío</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="nombreShipMetod"
                                 ref={register}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="nombreProducto">Nombre Producto</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="nombreProducto"
                                 ref={register}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                    <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="idProducto">ID Producto</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                type="number"
                                 name="idProducto"
                                 ref={register}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="precio1">Precio máximo</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="precio1"
                                 type="number"
                                 ref={register}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="precio2">Precio mínimo</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="precio2"
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
                    <th>IDOrden</th>
                    <th>NombreProveedor</th>
                    <th>IDMetodoEnvio</th>
                    <th>IDProducto</th>
                    <th>NombreProducto</th>
                    <th>TotalOrden</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>mm</td>
                        <td>Otto</td>
                        <td>@mdo</td>
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