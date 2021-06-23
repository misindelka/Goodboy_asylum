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
    ValueTitle as FormTitle,
    ContentContainer,
    LabelContainer,
    LinkTo,
} from '../styles/components/chooseStyled';
import { StyledCheckbox, CheckedWrapper, CheckedLabel } from '../styles/components/submitStyled';

import DogBg from '../assets/pageBg.png';

export const Submit: React.FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);

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
                        <Title>{translate('submitTitle', language)}</Title>
                    </TitleContainer>

                    <LabelContainer>
                        <FormTitle>{translate('submitSupportShelterLabel', language)}</FormTitle>
                    </LabelContainer>

                    <LabelContainer>
                        <FormTitle>{translate('submitAmoutLabel', language)}</FormTitle>
                    </LabelContainer>

                    <LabelContainer>
                        <FormTitle>{translate('submitNameSurnameLabel', language)}</FormTitle>
                    </LabelContainer>

                    <LabelContainer>
                        <FormTitle>{translate('submitEmailLabel', language)}</FormTitle>
                    </LabelContainer>

                    <LabelContainer>
                        <FormTitle>{translate('submitPhoneNumber', language)}</FormTitle>
                    </LabelContainer>

                    <CheckedWrapper>
                        <StyledCheckbox
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            value="Bike"
                        />
                        <CheckedLabel>{translate('submitTitle', language)}</CheckedLabel>
                    </CheckedWrapper>

                    <LabelContainer>
                        <LinkTo to="./UserData">{translate('backButton', language)}</LinkTo>
                        <LinkTo to="./Submit">{translate('submitButton', language)}</LinkTo>
                    </LabelContainer>
                </ContentContainer>

                <Container>
                    <Image src={DogBg} />
                </Container>
            </Wrapper>
        </>
    );
};
