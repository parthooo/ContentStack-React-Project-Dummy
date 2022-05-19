import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { getSingleData } from "../../api/getData";
import { CARD_GROUP_COMPONENT } from "../../constants/constants";

const CardGroupComp = ({ cardGroupID }) => {
    const [cardGroupBox, setCardGroupBox] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSingleData(
            CARD_GROUP_COMPONENT,
            cardGroupID,
            setCardGroupBox,
            setLoading
        );
    }, []);
    console.log("Card Group", cardGroupBox);

    return (
        <>
            {loading ? null : (
                <section className="card-box">
                    <Container>
                        <Row>
                            {cardGroupBox.card_group.map((cards, index) => (
                                <Col lg={4}>
                                    <Card className="mb-3">
                                        <Card.Img variant="top" src={cards.card_image.url} />
                                        <Card.Body>
                                            <Card.Title>{cards.card_title}</Card.Title>
                                            <Card.Text>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: cards.card_description,
                                                    }}
                                                />
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            )}
        </>
    );
};

export default CardGroupComp;