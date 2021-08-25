import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    padding-bottom: 50px;
`;

export const ButtonRedirect = styled(Link)`
    color: var(--shape);
    background-color: var(--yellow);
    border-color: transparent;
    border-radius: 4px;
    text-decoration: none;
    font-size: 20px;
    width: 250px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 20px;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8);
    }

    @media(max-width: 720px) {
        width: 160px !important;
    }
`;

export const Title = styled.h1`
    text-align: center;
    margin: 20px 0 40px 0;
    color: var(--yellow);
`;

export const Introduction = styled.p`
    text-align: justify;
    color: var(--text-body);
    line-height: 1.4;
    padding: 0 20% 0 20%;
    font-size: 24px;

    span {
        color: var(--yellow)
    }

    @media(max-width: 720px) {
        padding: 0 10% 0 10%;
    }
`;

export const ButtonsDirection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
`;