import styled from 'styled-components';
import { Field } from 'formik';

export const FormWrapper = styled.div`
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    border: 0.3px solid #cd8b65;
    width: ${(props) => props.theme.largeContarinerSize};
    height: ${(props) => props.theme.mediumInputHeight};
    padding: ${(props) => props.theme.secondaryPadding};

    margin-top: ${(props) => props.theme.secondaryPadding};
`;

export const StyledInput = styled(Field)`
    border: none;
    height: ${(props) => props.theme.smallIconSize};
    width: ${(props) => props.theme.mediumInputSize};
`;

export const InputName = styled.p`
    display: flex;
    margin: 0;
`;

export const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
