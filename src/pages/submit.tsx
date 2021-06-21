import * as React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../styles/components/generalStyled';

export const Submit: React.FC = () => (
    <>
        Submit
        <Container>
            <Link to="./Home">Home</Link>
            <Link to="./Choose">Choose</Link>
            <Link to="./UserData">UserData</Link>
            <Link to="./Submit">submit</Link>
        </Container>
    </>
);
