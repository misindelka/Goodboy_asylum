import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    top: 0;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
        flex: 1 auto 1;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LogoWrapper = styled.div`
    display: flex;
    padding: ${(props) => props.theme.smallPadding};
`;

export const LogoImage = styled.img`
    height: ${(props) => props.theme.mediumIconSize};
    width: ${(props) => props.theme.mediumIconSize};
`;

export const LogoText = styled.p`
    margin-top: 0;
    font-size: ${(props) => props.theme.largeFontSize};
    font-weight: bolder;
    font-family: sans-serif;
    margin-left: ${(props) => props.theme.secondaryPadding};
`;

export const CardTitle = styled.div`
    font-size: ${(props) => props.theme.mediumFontSize};
    font-weight: bold;
    font-family: sans-serif;
    justify-content: center;
    padding: ${(props) => props.theme.smallPadding};
`;

export const CardContent = styled.div`
    width: ${(props) => props.theme.mediumCardSize};
    height: ${(props) => props.theme.smallCardSize};
    font-size: ${(props) => props.theme.primaryFontSize};
    justify-content: center;
    padding: ${(props) => props.theme.smallPadding};
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
