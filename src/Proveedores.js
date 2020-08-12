import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {Container, Row,Col,InputGroup,FormControl,Button,Table} from 'react-bootstrap';
import axios from 'axios';

export const Proveedores = () => {


    const [purchasers, setPurchasers] = useState([]);

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        const dataJson = JSON.stringify(data);
        console.log(dataJson);
        axios.post("http://localhost:9000/Purchasing",data)
            .then(response => { 
                const purchase = response.data;
                // console.log(purchase);
                setPurchasers(purs => purchase);
                console.log(purchase);
            
            })
            .catch(error => console.log(error));

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
                                <InputGroup.Text id="NombreVendedor">Nombre Vendedor</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name="NombreVendedor"
                                    ref={register}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="NombreShipMethod">Nombre método envío</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="NombreShipMethod"
                                 ref={register}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="NombreProducto">Nombre Producto</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="NombreProducto"
                                 ref={register}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                    <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="ProductID">ID Producto</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                type="number"
                                 name="ProductID"
                                 ref={register}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="Precio2">Precio máximo</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="Precio2"
                                 type="number"
                                 ref={register}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="Precio1">Precio mínimo</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="Precio1"
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
                {
                    purchasers.map( (purs) => (
                        <tr>
                        <td>{purs.PurchaseOrderID}</td>
                        <td>{purs.VendorName}</td>
                        <td>{purs.ShipMethodID}</td>
                        <td>{purs.ProductID}</td>
                        <td>{purs.ProductName}</td>
                        <td>{purs.TotalDue}</td>
                    </tr>
                    ))
                }
                </tbody>
            </Table>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

    

    </div>
)}