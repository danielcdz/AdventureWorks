import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {Container, Row,Col,InputGroup,FormControl,Button,Table} from 'react-bootstrap';
import axios from 'axios';
import { LineChart } from './components/LineChart'
import styled from 'styled-components';

const Styles = styled.div`
    .divTable{
        overflow:auto;
        width:320px; height:80px;
    }
`;

export const Ventas = () => {



    const [sales, setSales] = useState([]);
    const [sales2, setSales2] = useState([]);

    const [sales3, setSales3] = useState([]);


    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        const dataJson = JSON.stringify(data);
        console.log(dataJson);
        axios.post("http://localhost:9000/Sale",data)
            .then(response => { 
                const sale = response.data;
                // console.log(purchase);
                setSales(vend => sale);
                console.log(sale);
            
            })
            .catch(error => console.log(error));

    }

    const onSubmit2 = (data) => {
        const dataJson = JSON.stringify(data);
        console.log(dataJson);
        axios.post("http://localhost:9000/IngresosTotales",data)
            .then(response => { 
                const sale = response.data;
                // console.log(purchase);
                setSales2(vend => sale);
                console.log(sale);
            
            })
            .catch(error => console.log(error));

    }
    const onSubmit3 = (data) => {
        const dataJson = JSON.stringify(data);
        console.log(dataJson);
        axios.post("http://localhost:9000/VentasTerritorioID",data)
            .then(response => { 
                const sale = response.data;
                // console.log(purchase);
                setSales3(vend => sale);
                console.log(sale);
            
            })
            .catch(error => console.log(error));

    }

    return(
        <div>
            <h4> Módulo de Ventas\AdventureWorks2017</h4>
            <p>Este es el módulo de ventas de AdventureWorks2017, aquí se puede encontrar y visualizar información acerca de las ventas de manera más concreta.</p>
            <hr></hr>
            <br></br>
            <h5> Gráfico de ventas por año</h5>
            <hr></hr>
            <LineChart/>
            <br></br>
            <br></br>
            <h5> Consulta de ventas totales por año</h5>
            <hr></hr>
            <form onSubmit={handleSubmit(onSubmit2)}>
                <Container>
                    <Row>              
                        <Col xs={6} md={4}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="yearP">Año</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                    name="yearP"
                                    type="number"
                                    ref={register}
                                    />
                                </InputGroup>
                            </Col>
                            <Col xs={6} md={4}>
                                
                    <Button variant="info" type="submit" >Buscar</Button>
                            </Col>
                        
                        
                    </Row>                  
                </Container> 
            </form>
            <Table responsive striped bordered hover size="sm" variant="dark" >
                <thead>
                    <tr>
                    <th>GananciasTotales</th>
                    </tr>
                </thead>
                <tbody>
                {
                    sales2.map( (sale) => (
                        <tr>
                        <td>{sale.GananciasTotales}</td>
                    </tr>
                    ))
                }
                </tbody>
            </Table>
            
            <br></br>
            <br></br>
            <h5> Consulta de ventas por ID Territorio</h5>
            <hr></hr>
            <form onSubmit={handleSubmit(onSubmit3)}>
                <Container>
                    <Row>              
                        <Col xs={6} md={4}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="territorioID">ID Territorio</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                    name="territorioID"
                                    type="number"
                                    ref={register}
                                    />
                                </InputGroup>
                            </Col>
                            <Col xs={6} md={4}>
                                
                    <Button variant="info" type="submit" >Buscar</Button>
                            </Col>
                        
                        
                    </Row>                  
                </Container> 
            </form>
            <Table responsive striped bordered hover size="sm" variant="dark" >
                <thead>
                    <tr>
                        <th>IDOrden</th>
                        <th>FechaOrden</th>
                        <th>FechaEnvio</th>
                        <th>IDTerritorio</th>
                        <th>NombreTerritorio</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {
                    sales3.map( (sale) => (
                        <tr>
                            <td>{sale.SalesOrderID}</td>
                            <td>{sale.OrderDate}</td>
                            <td>{sale.ShipDate}</td>
                            <td>{sale.TerritoryID}</td>
                            <td>{sale.Name}</td>
                            <td>{sale.TotalDue}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
            
            <br></br>
            <br></br>
            <h5> Búsqueda de Ventas por filtros</h5>
            <hr></hr>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Row>              
                        <Col xs={6} md={4}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="NumeroOrden">Número orden</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                    name="NumeroOrden"
                                    type="number"
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
                                type="number"
                                 name="ProductID"
                                 ref={register}
                                />
                            </InputGroup>
                        </Col>
                        
                    </Row>                  
                    <Button variant="info" type="submit" >Buscar</Button>
                </Container> 
            </form>
            <br></br>
            <Styles>
                <div className="divtable">
            <Table responsive striped bordered hover size="sm" variant="dark" >
                <thead>
                    <tr>
                    <th>IDOrden</th>
                    <th>IDMetodoEnvio</th>
                    <th>NombreMetodoEnvio</th>
                    <th>IDTerritorio</th>
                    <th>NombreTerritorio</th>
                    <th>IDProducto</th>
                    <th>NombreProducto</th>
                    </tr>
                </thead>
                <tbody>
                {
                    sales.map( (sale) => (
                        <tr>
                        <td>{sale.SalesOrderID}</td>
                        <td>{sale.ShipMethodID}</td>
                        <td>{sale.NombreShipMethod}</td>
                        <td>{sale.TerritoryID}</td>
                        <td>{sale.NombreTerritorio}</td>
                        <td>{sale.ProductID}</td>
                        <td>{sale.NombreProducto}</td>
                    </tr>
                    ))
                }
                </tbody>
            </Table>
            </div>
            </Styles>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </div>
    )
}
    
        