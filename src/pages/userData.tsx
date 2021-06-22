import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { translate } from '../i18n';
import { RootState } from '../redux/index';

import { Container } from '../styles/components/generalStyled';
import {
    Wrapper,
    Image,
    Title,
    TitleContainer,
    ContentContainer,
    PriceTitle as FormTitle,
    LabelContainer,
    LinkTo,
} from '../styles/components/chooseStyled';
import { StyledInput, FormWrapper, InputName } from '../styles/components/userDataStyled';
import DogBg from '../assets/pageBg.png';

export const UserData: React.FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);
    const handleInput = () => {};
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
                            placeholder={translate('userNamePlaceholder', language)}
                            name="name"
                            value=""
                            onChange={handleInput}
                        />
                    </FormWrapper>
                    <FormWrapper>
                        <InputName>{translate('userSurname', language)}</InputName>
                        <StyledInput
                            type="text"
                            placeholder={translate('userSurnamePlaceholder', language)}
                            name="surname"
                            value=""
                            onChange={handleInput}
                        />
                    </FormWrapper>

                    <FormWrapper>
                        <InputName>{translate('userEmail', language)}</InputName>
                        <StyledInput
                            type="email"
                            placeholder={translate('userEmailPlaceholder', language)}
                            name="email"
                            value=""
                            onChange={handleInput}
                        />
                    </FormWrapper>

                    <FormWrapper>
                        <InputName>{translate('userPhoneNo', language)}</InputName>
                        <StyledInput
                            type="tel"
                            placeholder={translate('userPhoneSk', language)}
                            name="phone"
                            value=""
                            onChange={handleInput}
                        />
                    </FormWrapper>

                    <LabelContainer>
                        <LinkTo to="./Choose">{translate('backButton', language)}</LinkTo>
                        <LinkTo to="./Submit">{translate('continueButton', language)}</LinkTo>
                    </LabelContainer>
                </ContentContainer>

                <Container>
                    <Image src={DogBg} />
                </Container>
            </Wrapper>
        </>
    );
};
