/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { translate } from '../i18n';
import { RootState } from '../redux/index';
import { addFormData } from '../redux/actions/formAction';

import { Container } from '../styles/components/generalStyled';
import {
    Wrapper,
    Image,
    Title,
    TitleContainer,
    ContentContainer,
    ValueTitle as FormTitle,
    LabelContainer,
    LinkTo,
} from '../styles/components/chooseStyled';
import { StyledInput, FormWrapper, InputName } from '../styles/components/userDataStyled';
import DogBg from '../assets/pageBg.png';

const initialFormData = {
    name: '',
    surname: '',
    email: '',
    phone: '',
};

export const UserData: React.FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);
    const [formData, setForm] = React.useState(initialFormData);

    const dispatch = useDispatch();

    const submitForm = (data: any) => {
        dispatch(addFormData(data));
    };

    const handleInput = (e: any) => {
        const { name, value } = e.target;
        setForm({ ...formData, [name]: value });
    };

    return (
        <>
            <Container>
                <Link to="./Choose" style={{ margin: '10px' }}>
                    Choose
                </Link>
                <Link to="./UserData" style={{ margin: '10px' }}>
                    UserData
                </Link>
                <Link to="./Submit" style={{ margin: '10px' }}>
                    submit
                </Link>
            </Container>
            <Wrapper>
                <ContentContainer>
                    <TitleContainer>
                        <Title>{translate('userDataTitle', language)}</Title>
                    </TitleContainer>

                    <LabelContainer>
                        <FormTitle>{translate('userDataFormTitle', language)}</FormTitle>
                    </LabelContainer>

                    <FormWrapper>
                        <InputName>{translate('userName', language)}</InputName>
                        <StyledInput
                            type="text"
                            minLength={2}
                            maxLength={20}
                            placeholder={translate('userNamePlaceholder', language)}
                            name="name"
                            value={formData.name}
                            onChange={handleInput}
                        />
                    </FormWrapper>
                    <FormWrapper>
                        <InputName>{translate('userSurname', language)}</InputName>
                        <StyledInput
                            type="text"
                            minLength={2}
                            maxLength={30}
                            placeholder={translate('userSurnamePlaceholder', language)}
                            name="surname"
                            value={formData.surname}
                            onChange={handleInput}
                        />
                    </FormWrapper>

                    <FormWrapper>
                        <InputName>{translate('userEmail', language)}</InputName>
                        <StyledInput
                            type="email"
                            placeholder={translate('userEmailPlaceholder', language)}
                            name="email"
                            value={formData.email}
                            onChange={handleInput}
                        />
                    </FormWrapper>

                    <FormWrapper>
                        <InputName>{translate('userPhoneNo', language)}</InputName>
                        <StyledInput
                            type="tel"
                            placeholder={translate('userPhoneSk', language)}
                            name="phone"
                            value={formData.phone}
                            onChange={handleInput}
                        />
                    </FormWrapper>

                    <LabelContainer>
                        <LinkTo to="./Choose">{translate('backButton', language)}</LinkTo>
                        <LinkTo to="./Submit" onClick={() => submitForm(formData)}>
                            {translate('continueButton', language)}
                        </LinkTo>
                    </LabelContainer>
                </ContentContainer>

                <Container>
                    <Image src={DogBg} />
                </Container>
            </Wrapper>
        </>
    );
};
