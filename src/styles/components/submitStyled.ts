import styled from 'styled-components';

export const CheckedWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${(props) => props.theme.largePadding};
    padding: ${(props) => props.theme.secondaryPadding};
`;
export const StyledCheckbox = styled.input`
    width: 34px;
    height: 34px;
`;

export const Label = styled.p`
    margin-left: ${(props) => props.theme.secondaryPadding}; ;
`;
