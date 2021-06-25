/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { translate } from '../i18n';
import { RootState } from '../redux/index';
import { addFormData } from '../redux/actions/formAction';

import SlovakLogo from '../assets/slovak.svg';
import CzechLogo from '../assets/czech.svg';
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
import {
    StyledInput,
    FormWrapper,
    InputName,
    InputWrapper,
} from '../styles/components/userDataStyled';
import DogBg from '../assets/pageBg.png';
import { IFormData } from '../redux/types';

export const UserDataForm: React.FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);
    const [country, setCountry] = React.useState('');

    const dispatch = useDispatch();

    const FormSchema = Yup.object().shape({
        firstName: Yup.string().min(2, 'Príliš krátke!').max(20, 'Príliš dlhé!'),
        lastName: Yup.string().min(2, 'Príliš krátke!').max(30, 'Príliš dlhé!').required('Povinné'),
        email: Yup.string().email('Nesprávny formát').required('Povinné'),
        phone: Yup.string().matches(
            /^(\+420|\+421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
            'Nesprávny formát',
        ),
    });

    const countryFlag = () => {
        switch (country) {
            case 'slovak':
                return SlovakLogo;
            case 'czech':
                return CzechLogo;
            default:
                return SlovakLogo;
        }
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
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                    }}
                    validationSchema={FormSchema}
                    onSubmit={(values: any) => {
                        dispatch(addFormData(values));

                        if (values.phone.startsWith('+421')) {
                            return setCountry('slovak');
                        }
                        if (values.phone.startsWith('+420')) {
                            return setCountry('czech');
                        }
                        return setCountry('');
                    }}
                >
                    <>
                        <ContentContainer>
                            <TitleContainer>
                                <Title>{translate('userDataTitle', language)}</Title>
                            </TitleContainer>

                            <LabelContainer>
                                <FormTitle>{translate('userDataFormTitle', language)}</FormTitle>
                            </LabelContainer>
                            <Form>
                                <FormWrapper>
                                    <InputName>{translate('userName', language)}</InputName>

                                    <StyledInput
                                        placeholder={translate('userNamePlaceholder', language)}
                                        name="firstName"
                                    />

                                    <ErrorMessage name="firstName" />
                                </FormWrapper>

                                <FormWrapper>
                                    <InputName>{translate('userSurname', language)}</InputName>

                                    <StyledInput
                                        placeholder={translate('userSurnamePlaceholder', language)}
                                        name="lastName"
                                    />
                                </FormWrapper>
                                <ErrorMessage name="lastName" />

                                <FormWrapper>
                                    <InputName>{translate('userEmail', language)}</InputName>
                                    <StyledInput
                                        placeholder={translate('userEmailPlaceholder', language)}
                                        name="email"
                                    />
                                </FormWrapper>
                                <ErrorMessage name="email" />

                                <FormWrapper>
                                    <InputName>{translate('userPhoneNo', language)}</InputName>
                                    <StyledInput
                                        placeholder={translate('userPhoneSk', language)}
                                        name="phone"
                                    />
                                    <img src={countryFlag()} />
                                </FormWrapper>
                                <ErrorMessage name="phone" />

                                <button type="submit">Submit </button>

                                <LabelContainer>
                                    <LinkTo back to="./ChooseSupport">
                                        {translate('backButton', language)}
                                    </LinkTo>
                                    <LinkTo back={false} to="./SubmitSupport">
                                        {translate('continueButton', language)}
                                    </LinkTo>
                                </LabelContainer>
                            </Form>
                        </ContentContainer>

                        <Container>
                            <Image src={DogBg} />
                        </Container>
                    </>
                </Formik>
            </Wrapper>
        </>
    );
};
