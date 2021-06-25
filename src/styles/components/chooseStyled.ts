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

export const DonationCard = styled.button<{ selected: boolean; left: boolean }>`
    display: flex;
    flex-direction: column;
    height: 186px;
    width: 278px;
    background: ${(props) => (props.selected ? props.theme.cardBgBrown : '#FAF9F9')};
    color: ${(props) => (props.selected ? '#FAF9F9;' : '#585757;')};
    border: 1px solid #cd8b65;
    box-sizing: border-box;
    border-radius: ${(props) => (props.left ? ' 24px 0px 0px 24px;' : ' 0px 24px 24px 0px;')};
    margin-top: ${(props) => props.theme.largePadding};
    cursor: pointer;
    background-color: ${(props) => (props.selected ? '#bcaaa4' : 'none')};
`;

export const LinkTo = styled(NavLink)<{ back: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${(props) => (props.back ? 'black' : 'white')};
    font-size: ${(props) => props.theme.primaryFontSize};
    width: 124px;
    height: 59px;
    left: 682px;
    top: 844px;
    margin-top: ${(props) => props.theme.largePadding};
    background: ${(props) => (props.back ? props.theme.linkSecondary : props.theme.cardBgBrown)};
    border-radius: 100px;
    text-decoration: none;
    :hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 0.3s;
    }
`;

export const TitleContainer = styled.div`
    max-width: ${(props) => props.theme.largeContarinerSize};
`;
export const Title = styled.div`
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 52px;
    letter-spacing: 0.01em;
    font-weight: bold;
`;

export const StyledSelect = styled.select`
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

export const ValueTitle = styled.p`
    display: flex;
    margin-left: 0;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
`;

export const ValueField = styled.div<{ selected: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 58px;
    height: 53px;
    left: 251px;
    top: 719px;
    background: ${(props) => (props.selected ? props.theme.cardBgBrown : 'none')};
    border: 1px solid #dfdfdf;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    margin: ${(props) => props.theme.secondaryPadding};
`;

export const InputValueField = styled.input`
    width: 24px;
    height: 23px;
    background: none;
    border: none;
    font-size: 16px;
    font-weight: 800;
    font-family: sans-serif;
`;

export const Value = styled.p`
    font-size: 16px;
    font-weight: 800;
    font-family: sans-serif;
`;

export const Image = styled.img`
    margin-left: ${(props) => props.theme.largePadding};
    max-height: 800px;
`;

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
