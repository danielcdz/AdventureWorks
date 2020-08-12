import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {Container, Row,Col,InputGroup,FormControl,Button,Table} from 'react-bootstrap';
import axios from 'axios';

export const Vendedores = () => {
    
    const [vendors, setVendors] = useState([]);

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        const dataJson = JSON.stringify(data);
        console.log(dataJson);
        axios.post("http://localhost:9000/SalePerson",data)
            .then(response => { 
                const vendor = response.data;
                // console.log(purchase);
                setVendors(vend => vendor);
                console.log(vendor);
            
            })
            .catch(error => console.log(error));

    }
    return(
        <div>
            <h4> Módulo de Vendedores\AdventureWorks2017</h4>
            <p>Este es el módulo de Vendedores de AdventureWorks2017, aquí se puede encontrar y visualizar información acerca de las Vendedores de manera más concreta.</p>
            <hr></hr>
            <br></br>
            <h5> Búsqueda de Vendedores por filtros</h5>
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
                                <InputGroup.Text id="TerritoryID">ID Territorio</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="TerritoryID"
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
                    <th>NombreVendedor</th>
                    <th>ID Territorio</th>
                    <th>NombreTerritorio</th>
                    <th>ID Producto</th>
                    <th>Nombre Producto</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {
                    vendors.map( (vend) => (
                        <tr>
                        <td>{vend.SalesOrderID}</td>
                        <td>{vend.NombreVendedor}</td>
                        <td>{vend.TerritoryID}</td>
                        <td>{vend.NombreTerritorio}</td>
                        <td>{vend.ProductID}</td>
                        <td>{vend.NombreProducto}</td>
                        <td>{vend.TotalDue}</td>
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
