import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {Container, Row,Col,InputGroup,FormControl,Button,Table} from 'react-bootstrap';
import axios from 'axios';


export const Clientes = () => {

    const [customers, setCustomers] = useState([]);
    
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        const dataJson = JSON.stringify(data);
        // console.log(dataJson);
        axios.post("http://localhost:9000/Customer",data)
            .then(response => {
                const datosC = response.data;
                setCustomers(cust => datosC);
                console.log(datosC);
            
            })
            .catch(error => console.log(error));


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
                                <InputGroup.Text id="PersonID">ID Cliente</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    type="number"
                                    name="PersonID"
                                    ref={register}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="NombreCliente">Nombre Cliente</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="NombreCliente"
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
                                type="number"
                                 name="TerritoryID"
                                 ref={register}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                    <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="NombreTerritorio">Nombre Territorio</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="NombreTerritorio"
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
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="ProductID">ID Producto</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="ProductID"
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
                    <th>IDCliente</th>
                    <th>NombreCliente</th>
                    <th>IDTerritorio</th>
                    <th>NombreTerritorio</th>
                    <th>IDProducto</th>
                    <th>NombreProducto</th>
                    </tr>
                </thead>
                <tbody>
                {
                    customers.map( (customer) => (
                        <tr>
                        <td>{customer.CustomerID}</td>
                        <td>{customer.CustomerName}</td>
                        <td>{customer.TerritoryID}</td>
                        <td>{customer.TerritoryName}</td>
                        <td>{customer.ProductID}</td>
                        <td>{customer.ProductName}</td>
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
