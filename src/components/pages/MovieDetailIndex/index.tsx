import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import Picture, { BaseItemProps } from '@/components/common/Picture';

export type MovieDetailIndexProps = {
    entries: {
        poster: BaseItemProps[];
        title: string;
        plot: string;
        actors: string;
    };
};

const MovieDetailIndex = ({ entries }: MovieDetailIndexProps): React.ReactElement => {
    return (
        <>
            <Container
                as="section"
                className="mt-6 mt-lg-10">
                <Row className="gy-3 justify-content-center">
                    <Col
                        xs={9}
                        md={6}
                        lg={4}>
                        <Picture items={entries.poster} />
                    </Col>
                    <Col lg={8}>
                        <h1>{entries.title}</h1>

                        <p>{entries.plot}</p>

                        <div className="mt-3">
                            <h4 className="mb-0 fs-16 fls-1 text-uppercase">Cast</h4>
                            <p>{entries.actors}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default MovieDetailIndex;
