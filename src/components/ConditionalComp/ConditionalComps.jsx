import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { getSingleData } from "../../api/getData";
import { CONDITIONAL_COMPONENT } from "../../constants/constants";

const ConditionalComps = ({ conditionalCompsID }) => {
    const [conditions, setConditions] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getSingleData(
            CONDITIONAL_COMPONENT,
            conditionalCompsID,
            setConditions,
            setLoading
        );
    }, []);
    // console.log("condition", conditions);

    const conditionStyle = {
        border: '',
        backgroundColor: '#f0f0f0',

    }

    return (
        <Container>
            <Row >
                <Col>
                    <Card className="mb-3">
                        <div className="p-5" style={conditionStyle}>
                            <h3>You have selected : {conditions?.select}</h3>
                            <h4>Your Destiantion is : {(conditions?.select == "Road Trip") ? <span><b>{conditions?.buy_bus_ticket?.bus_stop_name}</b></span> : <span><b>{conditions?.book_air_ticket?.airport_name}</b></span>}</h4>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ConditionalComps;