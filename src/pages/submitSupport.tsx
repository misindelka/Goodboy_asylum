import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { translate } from '../i18n';
import { RootState } from '../redux/index';
import { postFormData } from '../redux/actions/formAction';

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

export const SubmitSupport: React.FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);
    const formData = useSelector((state: RootState) => state.formData);
    const { shelters } = useSelector((state: IShelters) => state.shelters);
    const [checked, setChecked] = React.useState(false);
    const dispatch = useDispatch();

    const selectedShelter = shelters?.filter((i: IShelters) => i.id === formData.shelterID);

    const handleSubmitSupport = () => dispatch(postFormData(formData));

    return (
        <>
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
                    <Label>{formData.value} ???</Label>

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
                            color="rgba(47,47,47,0.8)"
                            defaultChecked={checked}
                            onChange={() => setChecked(!checked)}
                        />
                        <Label>{translate('submitTitle', language)}</Label>
                    </CheckedWrapper>

                    <LabelContainer>
                        <LinkTo back to="./UserDataForm">
                            {translate('backButton', language)}
                        </LinkTo>
                        {checked && (
                            <LinkTo back={false} to="./ChooseSupport" onClick={handleSubmitSupport}>
                                {translate('submitButton', language)}
                            </LinkTo>
                        )}
                    </LabelContainer>
                </ContentContainer>

                <Container>
                    <Image src={DogBg} />
                </Container>
            </Wrapper>
        </>
    );
};
