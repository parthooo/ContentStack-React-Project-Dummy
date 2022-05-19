import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { getSingleData } from "../../api/getData";
import { VIDEO_COMPONENT } from "../../constants/constants";

const VideoComp = ({ videoID }) => {
    const [videoBox, setVideoBox] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSingleData(
            VIDEO_COMPONENT,
            videoID,
            setVideoBox,
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
                                <Card style={{ width: '18rem' }} >
                                    <iframe class="embed-responsive-item" src={videoBox.card_video.url} allowfullscreen></iframe>
                                    <Card.Body>
                                        <Card.Title>{videoBox.card_title}</Card.Title>
                                        <Card.Text>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: videoBox.card_description,
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

export default VideoComp;