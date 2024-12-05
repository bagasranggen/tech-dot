import React from 'react';

import Form from '@/components/common/Form';
import { Col, Container, Row } from 'react-bootstrap';

export type ProfileLoginIndexProps = {};

const ProfileLoginIndex = ({}: ProfileLoginIndexProps): React.ReactElement => {
    return (
        <section
            className="d-flex align-items-center"
            style={{ height: '100vh' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={5}>
                        <h1 className="text-center">Login</h1>
                        <Form.LoginAuth />;
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProfileLoginIndex;
