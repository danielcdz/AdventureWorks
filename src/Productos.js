import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {Container, Row,Col,InputGroup,FormControl,Button,Table} from 'react-bootstrap';


export const Productos = () => { 


    // const [productos,setProductos]  = useState(['1','2','3','4','4','5','5','7','9','10']);

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

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
                                    name="nombreProducto"
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
                                 name="numeroProducto"
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
                                 name="categoriaProducto"
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
                                 name="modeloProducto"
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
                                 name="precioMax"
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
                                 name="precioMin"
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
                    <th>ProductID</th>
                    <th>ProductName</th>
                    <th>ProducNumber</th>
                    <th>ProductCategoryName</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>ProductModelName</th>
                    <th>StandartCost</th>
                    <th>SellStartDate</th>
                    <th>Quantity</th>
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
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@s</td>             
                        <td>@s</td>
                    </tr>
                </tbody>
            </Table>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
        )
}
