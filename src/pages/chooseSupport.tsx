/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { translate } from '../i18n';
import { RootState } from '../redux/index';
import { IFormData, IShelters } from '../redux/types';
import { addFormData } from '../redux/actions/formAction';

import Wallet from '../assets/wallet.png';
import DogFoot from '../assets/dogFoot.png';
import { Container } from '../styles/components/generalStyled';
import {
    Wrapper,
    DonationCard,
    Image,
    Title,
    TitleContainer,
    ContentContainer,
    StyledSelect,
    ValueField,
    ValueTitle,
    LabelContainer,
    CardSelectBrown,
    CardSelectGrey,
    Icon,
    LinkTo,
    CardDesc,
    InputValueField,
    Value,
} from '../styles/components/chooseStyled';
import DogBg from '../assets/pageBg.png';

const initialOptionsValue = {
    shelterOption: '',
    shelterID: 0,
    value: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
};

interface IProps {
    shelterOption: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    value: string;
    shelterID: number;
}

export const ChooseSupport: React.FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);
    const { shelters } = useSelector((state: IShelters) => state.shelters);
    const [options, setOptions] = React.useState<IProps>(initialOptionsValue);

    const dispatch = useDispatch();

    const submitData = (data: IFormData) => {
        dispatch(addFormData(data));
    };
    return (
        <>
            <Wrapper>
                <ContentContainer>
                    <TitleContainer>
                        <Title>{translate('chooseTitle', language)}</Title>
                    </TitleContainer>

                    <Container>
                        <DonationCard
                            left
                            selected={
                                options.shelterOption ===
                                `${translate('chooseSupportShelter', language)}`
                            }
                            onClick={() =>
                                setOptions({
                                    ...options,
                                    shelterOption: `${translate('chooseSupportShelter', language)}`,
                                })
                            }
                        >
                            <CardSelectGrey>
                                <Icon src={Wallet} />
                            </CardSelectGrey>
                            <CardDesc>{translate('chooseSupportShelter', language)}</CardDesc>
                        </DonationCard>

                        <DonationCard
                            left={false}
                            selected={
                                options.shelterOption ===
                                `${translate('cooseSupportTrust', language)}`
                            }
                            onClick={() =>
                                setOptions({
                                    ...options,
                                    shelterOption: `${translate('cooseSupportTrust', language)}`,
                                    shelterID: 0,
                                })
                            }
                        >
                            <CardSelectBrown>
                                <Icon src={DogFoot} />
                            </CardSelectBrown>
                            <CardDesc>{translate('cooseSupportTrust', language)}</CardDesc>
                        </DonationCard>
                    </Container>

                    {options.shelterOption === `${translate('chooseSupportShelter', language)}` && (
                        <>
                            <LabelContainer>
                                <ValueTitle>{translate('chooseAboutProject', language)}</ValueTitle>
                                <ValueTitle>{translate('chooseVoluntary', language)}</ValueTitle>
                            </LabelContainer>

                            <Container>
                                <StyledSelect
                                    value={options.shelterID}
                                    onChange={(e: any) =>
                                        setOptions({
                                            ...options,

                                            shelterID: parseFloat(e.target.value),
                                        })
                                    }
                                >
                                    <option> {translate('chooseFromList', language)}</option>
                                    {shelters?.map((i: IShelters) => (
                                        <option key={i.id} value={i.id}>
                                            {i.name}
                                        </option>
                                    ))}
                                </StyledSelect>
                            </Container>
                        </>
                    )}

                    <LabelContainer>
                        <ValueTitle>{translate('choosePriceToDonate', language)}</ValueTitle>
                    </LabelContainer>

                    <Container>
                        <ValueField
                            selected={options.value === '5'}
                            onClick={() => setOptions({ ...options, value: '5' })}
                        >
                            <Value>5€</Value>
                        </ValueField>

                        <ValueField
                            selected={options.value === '10'}
                            onClick={() => setOptions({ ...options, value: '10' })}
                        >
                            <Value>10€</Value>
                        </ValueField>

                        <ValueField
                            selected={options.value === '20'}
                            onClick={() => setOptions({ ...options, value: '20' })}
                        >
                            <Value>20€</Value>
                        </ValueField>

                        <ValueField
                            selected={options.value === '50'}
                            onClick={() => setOptions({ ...options, value: '50' })}
                        >
                            <Value>50€</Value>
                        </ValueField>

                        <ValueField
                            selected={options.value === '100'}
                            onClick={() => setOptions({ ...options, value: '100' })}
                        >
                            <Value>100€</Value>
                        </ValueField>

                        <ValueField
                            selected={options.value === 'custom'}
                            onClick={() => setOptions({ ...options, value: 'custom' })}
                        >
                            <InputValueField
                                type="text"
                                placeholder="..."
                                onChange={(e: any) => setOptions(e.target.value)}
                            />
                            €
                        </ValueField>
                    </Container>
                    <LabelContainer>
                        <Container />
                        <LinkTo
                            back={false}
                            to="./UserDataForm"
                            onClick={() => submitData(options)}
                        >
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
