import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from './../../assets/logo.png';

export default function Header() {
    return(
        <Container>
            <Link to="/">
                <img src={logo} style={{width: '8rem', height: '3rem'}} alt="Flex"/>
            </Link>
        </Container>
    )
}