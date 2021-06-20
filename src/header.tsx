import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <div>
            header
            <div>
                <Link to="./Home">Home</Link>
                <Link to="./Choose">Choose</Link>
                <Link to="./UserData">UserData</Link>
                <Link to="./Submit">Home</Link>
            </div>
        </div>
    );
};
