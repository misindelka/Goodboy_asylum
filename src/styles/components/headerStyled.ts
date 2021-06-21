import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    align-items: center;
    background-color: ${(props) => props.theme.headerBg};
    display: flex;
    flex-direction: row;
    font-family: ${(props) => props.theme.headerFont};
    font-size: ${(props) => props.theme.primaryFontSize};
    color: ${(props) => props.theme.secondaryTextGrey};
    justify-content: space-around;
    top: 0;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
        flex: 1 auto 1;
    }
`;

export const LogoImage = styled.img`
    height: ${(props) => props.theme.smallIconSize};
    width: ${(props) => props.theme.smallIconSize};
    margin-right: ${(props) => props.theme.secondaryPadding};
`;

export const LinkTo = styled(NavLink)`
    display: flex;
    color: black;
    cursor: pointer;
    font-size: ${(props) => props.theme.primaryFontSize};
    padding: ${(props) => props.theme.smallPadding};
    text-decoration: none;
    :hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 0.3s;
    }
`;
