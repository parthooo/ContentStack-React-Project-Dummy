import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { getSingleData } from "../../api/getData";
import { JUMBORTRON_COMPONENT } from "../../constants/constants";

const JumbotronComp = ({ jumbotronID }) => {
    const [jumbotron, setJumbotron] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSingleData(
            JUMBORTRON_COMPONENT,
            jumbotronID,
            setJumbotron,
            setLoading
        );
    }, []);
    return (
        <>
            {loading ? null : (
                <section>
                    <Container>
                        <Row>
                            <Col>
                            <Card className="mb-3">
                                <div className="p-5" style={jumbotron?.background_image?.url ? { backgroundImage: `url(${jumbotron.background_image.url})` } : {backgroundColor: `#f0f0f0`}} >
                                    <h1>{jumbotron.jumbotron_title}</h1>
                                    <h3>{jumbotron.jumbotron_sub_title}</h3>
                                    <hr />
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: jumbotron.jumbotron_peragraph,
                                        }}
                                    />
                                    <Button bsStyle="primary">{jumbotron.jumbotron_title}</Button>
                                </div>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            )}
        </>
    );
};

export default JumbotronComp;