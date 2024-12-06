'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { useQueryString } from '@/libs/hooks';

import { Col, Container, Row } from 'react-bootstrap';

import Button from '@/components/common/Button';
import Form from '@/components/common/Form';
import Card from '@/components/common/Card';

export type SearchIndexProps = {
    entries: {
        search?: string;
        movies?: any[];
        categories?: any[];
    };
};

const SearchIndex = ({ entries }: SearchIndexProps): React.ReactElement => {
    const router = useRouter();
    const { pathname, createQueryString } = useQueryString();

    return (
        <>
            <Container
                as="section"
                className="mt-15">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Form.Search query={entries.search} />
                    </Col>
                </Row>
            </Container>

            <section>
                <Container className="mt-10">
                    <div className="d-flex align-items-center justify-content-between">
                        <h1 className="mb-0 fs-18 fls-1 fw-light">
                            Search result for: <b className="fw-bold">{entries.search}</b>
                        </h1>

                        {entries.categories && (
                            <ul className="list-inline text-end">
                                <li className="list-inline-item fs-14 fls-3 text-uppercase fw-bold me-3">Category:</li>
                                {entries.categories.map((item, i: number) => (
                                    <li
                                        key={i}
                                        className="list-inline-item">
                                        <Button.Main
                                            as="button"
                                            type="button"
                                            onClick={() => {
                                                router.push(`${pathname}?${createQueryString('type', item.handle)}`);
                                            }}
                                            className="fs-14 fls-3 text-uppercase">
                                            {item.label}
                                        </Button.Main>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </Container>
                <hr />
            </section>

            {entries.movies && (
                <Container className="mt-3 mb-10">
                    <Card.Thumbnail
                        className="gy-5 row-cols-4"
                        items={entries.movies}
                    />
                </Container>
            )}

            {(!entries?.movies || entries?.movies?.length === 0) && (
                <Container className="my-4 text-center">
                    <h4>Oops! We cannot find any movies</h4>
                </Container>
            )}
        </>
    );
};

export default SearchIndex;
