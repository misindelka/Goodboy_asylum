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
import { StyledCheckbox, CheckedWrapper, Label } from '../styles/components/submitStyled';

import DogBg from '../assets/pageBg.png';
import { IShelters } from '../redux/types';

export const Submit: React.FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);
    const formData = useSelector((state: RootState) => state.formData);
    const { shelters } = useSelector((state: IShelters) => state.shelters);

    const selectedShelter = shelters?.filter((i: any) => i.id === formData.shelterID);

    console.log(selectedShelter?.map((i: any) => i.name));
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
                    {formData.shelterID !== 0 ? (
                        selectedShelter.map((i: any) => <Label key={i.id}>{i.name}</Label>)
                    ) : (
                        <Label>{translate('cooseSupportTrust', language)}</Label>
                    )}

                    <LabelContainer>
                        <FormTitle>{translate('submitAmoutLabel', language)}</FormTitle>
                    </LabelContainer>
                    <Label>{formData.value} €</Label>

                    <LabelContainer>
                        <FormTitle>{translate('submitNameSurnameLabel', language)}</FormTitle>
                    </LabelContainer>
                    <Label>
                        {formData.firstName} {formData.lastName}
                    </Label>

                    <LabelContainer>
                        <FormTitle>{translate('submitEmailLabel', language)}</FormTitle>
                    </LabelContainer>
                    <Label>{formData.email}</Label>

                    <LabelContainer>
                        <FormTitle>{translate('submitPhoneNumber', language)}</FormTitle>
                    </LabelContainer>
                    <Label>{formData.phone}</Label>

                    <CheckedWrapper>
                        <StyledCheckbox
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            value="Bike"
                        />
                        <Label>{translate('submitTitle', language)}</Label>
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
