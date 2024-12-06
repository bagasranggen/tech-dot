'use client';

import React, { PropsWithChildren } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import Navigation from '@/components/layout/Navigation';
import Button from '@/components/common/Button';
import { PROFILE_NAVIGATION } from '@/libs/mock';
import { useUserStateContext } from '@/store/Context';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
    const { user } = useUserStateContext();

    return (
        <>
            <Navigation hasLogout />

            <Container className="mt-5">
                <Row className="gy-3">
                    <Col
                        lg={3}
                        xl={2}>
                        <ul className="list-unstyled d-flex d-lg-block gap-2 justify-content-center position-relative z-2">
                            {PROFILE_NAVIGATION.map((item, i: number) => {
                                return (
                                    <li key={i}>
                                        <Button
                                            as="link"
                                            className="text-uppercase fls 18 fls-3 fc-dark"
                                            href={`/profile/${user?.username}/${item.href}`}>
                                            {item.label}
                                        </Button>
                                    </li>
                                );
                            })}
                        </ul>
                    </Col>
                    <Col
                        lg={9}
                        xl={10}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </>
    );
}
