import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {Container, Row,Col,InputGroup,FormControl,Button,Table} from 'react-bootstrap';
import axios from 'axios';


export const Productos = () => { 


    const [products, setProducts] = useState([]);
    


    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        const dataJson = JSON.stringify(data);
        console.log(dataJson);
        axios.post("http://localhost:9000/Product",data)
            .then(response => {
                
                const datosP = response.data;
                
                setProducts(prods => datosP);
                console.log(datosP);
            
            })
            .catch(error => console.log(error));

        // console.log(datosP);
        // console.log(dataJson);
    }
    
    // console.log(products);

    return(
        <div>
            <h4> Módulo de Productos\AdventureWorks2017</h4>
            <p>Este es el módulo de productos de AdventureWorks2017, aquí se puede encontrar y visualizar información acerca de las productos de manera más concreta.</p>
            <hr></hr>
            <br></br>
            <h5> Búsqueda de productos por filtros</h5>
            <hr></hr>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Row>              
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="nombre">Nombre</InputGroup.Text>
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
                                <InputGroup.Text id="numero">Número Producto</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="NumeroProducto"
                                 ref={register}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="categoria">Categoría</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="NombreCategoria"
                                 ref={register}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                    <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="modelo">Módelo</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                 name="NombreModelo"
                                 ref={register}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={6} md={4}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="precioMax">Precio máximo</InputGroup.Text>
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
                                <InputGroup.Text id="precioMin">Precio mínimo</InputGroup.Text>
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
                    <th>IDProducto</th>
                    <th>NombreProducto</th>
                    <th>NumeroProducto</th>
                    <th>CategoriaProducto</th>
                    <th>Color</th>
                    <th>Talla</th>
                    <th>ModeloProducto</th>
                    <th>PrecioEstandar</th>
                    <th>FechaDeInicioVenta</th>
                    <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            products.map( (product) => (
                                <tr>
                                <td>{product.ProductID}</td>
                                <td>{product.ProductName}</td>
                                <td>{product.ProductNumber}</td>
                                <td>{product.ProductCategoryName}</td>
                                <td>{product.Color}</td>
                                <td>{product.Size}</td>
                                <td>{product.ProductModelName}</td>
                                <td>{product.StandardCost}</td>
                                <td>{product.SellStartDate}</td>
                                <td>{product.Quantity}</td>
                               
                            </tr>
                            ))
                        }
                    {/* <tr>
                        <td>1</td>
                        <td>mm</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@s</td>             
                        <td>@s</td>
                    </tr> */}
                </tbody>
            </Table>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
        )
}
