import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getTestQry } from "../API";

import {
    Container,
    Form,
    Button,
    Row,
    Col,
    Spinner,
    Alert,
} from "react-bootstrap";

const TestQuery = () => {
    let { qry } = useParams();
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(null);
    const [showSpinner, setShowSpinner] = useState(false);
    const [msg, setMsg] = useState({
        content: null,
        variant: null,
    });

    const doQuery = async (q) => {
        setShowSpinner(true);
        const res = await getTestQry(query);
        if (!res) {
            setMsg({
                content: "Could not connect to the DB",
                variant: "danger",
            });
            setShowSpinner(false);
            return;
        }
        setMsg({
            content: null,
            variant: null,
        });
        setResults(res);
        setShowSpinner(false);
    };

    useEffect(() => {
        if (qry) {
            setQuery(qry);
        }
    }, [qry]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(query);
        // TODO: Show spinner on 2nd submit
        // setShowSpinner(true);
        doQuery(query);
    };

    return (
        <Container>
            {msg["content"] && (
                <Alert
                    variant={msg["variant"]}
                    onClose={() =>
                        setMsg({
                            content: null,
                            variant: null,
                        })
                    }
                    dismissible
                >
                    {/* TODO: Check if error is {}, display generic if so */}
                    {msg["content"]}
                </Alert>
            )}
            <h5>Test Query</h5>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Control
                            type="search"
                            name="q"
                            placeholder="Search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
            <hr />
            {results && (
                <div>
                    Response from Flask:
                    <pre style={{ whiteSpace: "pre-wrap" }}>
                        {JSON.stringify(results.data)}
                    </pre>
                </div>
            )}
            {showSpinner && !results && (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            )}
        </Container>
    );
};

export default TestQuery;
