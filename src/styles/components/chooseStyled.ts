import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    top: 0;
    width: 100%;
    padding: ${(props) => props.theme.largePadding};
    @media (max-width: 768px) {
        flex-direction: column;
        flex: 1 auto 1;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const CardDesc = styled.p`
    margin-left: ${(props) => props.theme.mediumPadding};
`;

export const CardWhite = styled.div`
    display: flex;
    flex-direction: column;
    height: 186px;
    width: 278px;
    background: #faf9f9;
    border: 1px solid #cd8b65;
    box-sizing: border-box;
    border-radius: 24px 0px 0px 24px;
`;
export const CardBrown = styled.div`
    display: flex;
    flex-direction: column;
    height: 186px;
    width: 278px;
    background: linear-gradient(180deg, #cd8b65 0%, #bb6b3d 100%);
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
        0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
        0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
        0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
        0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    border-radius: 0px 24px 24px 0px;
`;

export const LinkTo = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: black;
    font-size: ${(props) => props.theme.primaryFontSize};
    width: 124px;
    height: 59px;
    left: 682px;
    top: 844px;
    margin-top: ${(props) => props.theme.largePadding};
    background: linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
        0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
        0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
        0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
        0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    border-radius: 100px;
    text-decoration: none;
    :hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 0.3s;
    }
`;

export const TitleContainer = styled.div`
    margin: ${(props) => props.theme.largePadding};

    max-width: ${(props) => props.theme.largeContarinerSize};
`;
export const Title = styled.div`
    font-family: Hind;
    font-style: normal;
    font-weight: bold;
    font-size: 46px;
    line-height: 52px;
    letter-spacing: 0.01em;
    font-weight: bold;
`;

export const Select = styled.select`
    width: ${(props) => props.theme.largeContarinerSize};
    height: ${(props) => props.theme.mediumIconSize};
    background: white;
    color: gray;
    padding-left: 5px;
    font-size: 14px;
    border: none;
    border: 1px solid #dfdfdf;
    border-radius: 8px;
    option {
        color: black;
        background: white;
        font-weight: small;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;

export const LabelContainer = styled.div`
    margin-top: ${(props) => props.theme.largePadding};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${(props) => props.theme.largePadding};
    width: ${(props) => props.theme.largeContarinerSize};
`;

export const PriceTitle = styled.p`
    display: flex;
    margin-left: 0;
    font-family: Public Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
`;

export const PriceField = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 58px;
    height: 53px;
    left: 251px;
    top: 719px;
    background: #ffffff;
    border: 1px solid #dfdfdf;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: Public Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    margin: ${(props) => props.theme.secondaryPadding};
`;

export const Image = styled.img``;

export const Icon = styled.img`
    width: 30px;
    height: 30px;
`;

export const CardSelectGrey = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background: #e0e0e0;
    border-radius: 100%;
    margin: ${(props) => props.theme.mediumPadding};
    margin-bottom: 5px;
`;

export const CardSelectBrown = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background: #8d6e63;
    border-radius: 100%;
    margin: ${(props) => props.theme.mediumPadding};
    margin-bottom: 5px;
`;
