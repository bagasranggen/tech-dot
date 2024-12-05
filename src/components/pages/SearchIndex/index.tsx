'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { useQueryString } from '@/libs/hooks';

import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Button from '@/components/common/Button';
import Form from '@/components/common/Form';
import Picture from '@/components/common/Picture';

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

            <Container className="mt-3">
                <Row className="row-cols-4">
                    {entries.movies?.map((item, i: number) => {
                        return (
                            <Col key={i}>
                                <div className="card-thumbnail">
                                    <Button
                                        as="button"
                                        className="btn p-0 card-thumbnail__icon">
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            size="2x"
                                        />
                                    </Button>
                                    <Button
                                        as="link"
                                        href={`/movie/${item.imdbID}`}>
                                        <div className="">
                                            <Picture
                                                className="d-block oly--20"
                                                items={[{ src: item.Poster, alt: item.Title }]}
                                            />
                                            <h4 className="fs-18 fls-1 fc-dark fw-light text-uppercase">
                                                {item.Title}
                                            </h4>
                                        </div>
                                    </Button>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>

            {(!entries?.movies || entries?.movies?.length === 0) && (
                <Container className="my-4 text-center">
                    <h4>Oops! Look&apos;s like we cannot find any movies</h4>
                </Container>
            )}
        </>
    );
};

export default SearchIndex;
