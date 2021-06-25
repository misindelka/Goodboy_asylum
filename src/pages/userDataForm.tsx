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
    SubmitFormButton,
    SubmitWrapper,
} from '../styles/components/userDataStyled';
import DogBg from '../assets/pageBg.png';

export const UserDataForm: React.FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);
    const [country, setCountry] = React.useState('');
    const [terms, setTerms] = React.useState(false);

    const dispatch = useDispatch();

    const handleSubmitAlert = () => {
        // eslint-disable-next-line no-lone-blocks
        {
            alert(`${translate('userFromConfirmSubmitMessage', language)}`);
        }
    };

    const FormSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, `${translate('userNameErrorShort', language)}`)
            .max(20, `${translate('userNameErrorLong', language)}`),
        lastName: Yup.string()
            .min(2, `${translate('userSurnameErrorShort', language)}`)
            .max(30, `${translate('userSurnameErrorShort', language)}`)
            .required(`${translate('userMailErrorRequired', language)}`),
        email: Yup.string()
            .email(`${translate('userMailError', language)}`)
            .required(`${translate('userMailErrorRequired', language)}`),
        phone: Yup.string().matches(
            /^(\+420|\+421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
            `${translate('userMailError', language)}`,
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
                                    <InputWrapper>
                                        <StyledInput
                                            placeholder={translate('userNamePlaceholder', language)}
                                            name="firstName"
                                        />
                                        <ErrorMessage name="firstName" />
                                    </InputWrapper>
                                </FormWrapper>

                                <FormWrapper>
                                    <InputName>{translate('userSurname', language)}</InputName>

                                    <InputWrapper>
                                        <StyledInput
                                            placeholder={translate(
                                                'userSurnamePlaceholder',
                                                language,
                                            )}
                                            name="lastName"
                                        />
                                        <ErrorMessage name="lastName" />
                                    </InputWrapper>
                                </FormWrapper>

                                <FormWrapper>
                                    <InputName>{translate('userEmail', language)}</InputName>
                                    <InputWrapper>
                                        <StyledInput
                                            placeholder={translate(
                                                'userEmailPlaceholder',
                                                language,
                                            )}
                                            name="email"
                                        />
                                        <ErrorMessage name="email" />
                                    </InputWrapper>
                                </FormWrapper>

                                <FormWrapper>
                                    <InputName>{translate('userPhoneNo', language)}</InputName>
                                    <InputWrapper>
                                        <img src={countryFlag()} />
                                        <StyledInput
                                            placeholder={translate('userPhoneSk', language)}
                                            name="phone"
                                        />
                                        <ErrorMessage name="phone" />
                                    </InputWrapper>
                                </FormWrapper>

                                <SubmitWrapper>
                                    {terms ? (
                                        <InputName>
                                            {translate('userFormTermsAgreemet', language)}
                                        </InputName>
                                    ) : (
                                        <InputName>
                                            {translate('userFromConfirmSubmitMessage', language)}
                                        </InputName>
                                    )}

                                    <SubmitFormButton
                                        type="submit"
                                        onClick={() => setTerms(!terms)}
                                    >
                                        {translate('userAgreementButton', language)}
                                    </SubmitFormButton>
                                </SubmitWrapper>
                                <LabelContainer>
                                    <LinkTo back to="./ChooseSupport">
                                        {translate('backButton', language)}
                                    </LinkTo>

                                    {terms ? (
                                        <LinkTo back={false} to="./SubmitSupport">
                                            {translate('continueButton', language)}
                                        </LinkTo>
                                    ) : (
                                        <LinkTo
                                            back={false}
                                            to="./UserDataForm"
                                            onClick={handleSubmitAlert}
                                        >
                                            {translate('continueButton', language)}
                                        </LinkTo>
                                    )}
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
