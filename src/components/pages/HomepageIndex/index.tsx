import React from 'react';

import Form from '@/components/common/Form';
import { Col, Container, Row } from 'react-bootstrap';

export type HomepageIndexProps = {};

const HomepageIndex = ({}: HomepageIndexProps): React.ReactElement => {
    return (
        <>
            <section
                className="d-flex align-items-center"
                style={{ height: '100vh' }}>
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col md={8}>
                            <h1>Find Your Movies</h1>
                            <Form.Search />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HomepageIndex;
