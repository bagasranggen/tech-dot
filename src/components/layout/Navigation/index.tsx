'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { Container, Nav, Navbar } from 'react-bootstrap';

import Link from '@/components/common/Link';
import { useUserStateContext } from '@/store/Context';
// import Button from '@/components/common/Button';

export type NavigationProps = {
    hasLogout?: boolean;
};

const Navigation = ({ hasLogout }: NavigationProps): React.ReactElement => {
    const router = useRouter();
    const { user, userLogoutHandler } = useUserStateContext();
    // const { user } = ();

    return (
        <Navbar
            expand="lg"
            className="bg-body-tertiary"
            sticky="top">
            <Container>
                <Navbar.Brand href="/">Find Your Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {!hasLogout && (
                            <Nav.Link
                                as={Link}
                                href="/profile"
                                className="text-uppercase fls-3">
                                {user ? 'Your Profile' : 'Login'}
                            </Nav.Link>
                        )}
                        {hasLogout && (
                            <Nav.Link
                                as={Link}
                                href="#"
                                className="text-uppercase fls-3"
                                onClick={() => userLogoutHandler({ onSuccess: () => router.push('/') })}>
                                LOGOUT
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
