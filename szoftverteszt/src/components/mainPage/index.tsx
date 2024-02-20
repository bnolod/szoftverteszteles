import {} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./index.scss"
import {Messages} from "../messages/index"
import { NavBar } from "../navbar";

export  function MainPage() {
    return (
        <div className="main">
        <Container  className="p-0">
            <Row lassName="p-0">
                <Col xs="1" className="p-0">
                    <NavBar/>
                </Col>
                <Col xs="8" className="p-0">
                    <h1>MainPage</h1>
                </Col>
                <Col xs="3" className="p-0">
                    <Messages/>
                </Col>
            </Row>
        </Container>
        </div>
    )
}