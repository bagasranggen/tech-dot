'use client';

import React from 'react';

import { useMovieStateContext } from '@/store/Context';
import { useLikeButton, useMovieList, useQueryString } from '@/libs/hooks';

import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next-nprogress-bar';

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
    const { moviesLikeId } = useMovieStateContext();
    const { pathname, createQueryString } = useQueryString();
    const { likeClickButtonHandler } = useLikeButton();
    const { movies } = useMovieList({ movies: entries?.movies ?? [], likes: moviesLikeId });

    return (
        <>
            <Container
                as="section"
                className="mt-8 mt-lg-15">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Form.Search query={entries.search} />
                    </Col>
                </Row>
            </Container>

            <section>
                <Container className="mt-10">
                    <Row className="gy-3 align-items-center justify-content-md-between">
                        <Col md="auto">
                            <h1 className="mb-0 fs-18 fls-1 fw-light text-center text-md-start">
                                Search result for: <b className="fw-bold">{entries.search}</b>
                            </h1>
                        </Col>

                        {entries.categories && (
                            <Col md="auto">
                                <ul className="list-inline text-center text-md-end">
                                    <li className="list-inline-item d-block d-md-inline-block fs-14 fls-3 text-uppercase fw-bold  me-0 me-md-3">
                                        Category:
                                    </li>
                                    {entries.categories.map((item, i: number) => (
                                        <li
                                            key={i}
                                            className="list-inline-item">
                                            <Button.Main
                                                as="button"
                                                type="button"
                                                onClick={() => {
                                                    router.push(
                                                        `${pathname}?${createQueryString('type', item.handle)}`
                                                    );
                                                }}
                                                className="fs-14 fls-3 text-uppercase">
                                                {item.label}
                                            </Button.Main>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        )}
                    </Row>
                </Container>

                <hr />
            </section>

            {movies && (
                <Container className="mt-3 mb-10">
                    <Card.Thumbnail
                        className="gy-5 row-cols-2 row-cols-md-3 row-cols-xl-4"
                        likeButton={{
                            onClick: likeClickButtonHandler,
                        }}
                        items={movies}
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
