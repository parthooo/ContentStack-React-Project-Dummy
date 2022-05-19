import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { getSingleData } from "../../api/getData";
import { CARD_COMPONENT } from "../../constants/constants";

const CardBox = ({ cardBoxID }) => {
  const [cardBox, setCardBox] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleData(
      CARD_COMPONENT,
      cardBoxID,
      setCardBox,
      setLoading
    );
  }, []);

  return (
    <>
      {loading ? null : (
        <section className="card-box">
          <Container>
            <Row>
              <Col>
                <Card style={{ width: '18rem' }} className="m-3">
                  <Card.Img variant="top" src={cardBox.card_image.url} />
                  <Card.Body>
                    <Card.Title>{cardBox.card_title}</Card.Title>
                    <Card.Text>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: cardBox.card_description,
                        }}
                      />
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default CardBox;
