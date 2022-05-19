import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { getSingleData } from "../../api/getData";
import { QUESTION_COMPONENT } from "../../constants/constants";

const Questions = ({ questionID }) => {
    const [questions, setQuestions] = useState(null);
    const [loading, setLoading] = useState(true);

    const [submitans, setSubmitans] = useState(null);

    useEffect(() => {
        getSingleData(
            QUESTION_COMPONENT,
            questionID,
            setQuestions,
            setLoading
        );
    }, []);

    const questionStyle = {
        border: '',
        backgroundColor: '#f0f0f0',

    }

    let onChangeValue = e => {
        let val = (e.target.value);
        setSubmitans(val);
        // console.log("TARGET", val);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card className="mb-3" >
                            <div className="p-5" style={questionStyle}>
                                <h3>Questions: </h3>
                                {questions?.modular_blocks?.map((qs, index) => (
                                    <div>
                                        <h4>
                                            {qs.question.single_line}
                                        </h4>
                                        <ul>
                                            {qs?.question?.answer_text?.map(ans =>
                                                <div onChange={onChangeValue}>
                                                    <input type="radio" id={ans} name={index} value={ans} />
                                                    <label for="html">{ans}</label><br />
                                                </div>
                                            )}
                                            {
                                                (submitans == qs.question.correct_answer) ? <h4 className="text-success">Your Answer Is Correct</h4> : <h4 className="d-none">Correct Answer: {qs.question.correct_answer}</h4>
                                            }
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Questions;
