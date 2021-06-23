/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { translate } from '../i18n';
import { RootState } from '../redux/index';
import { IShelters } from '../redux/types';
import { addFormData } from '../redux/actions/formAction';

import Wallet from '../assets/wallet.png';
import DogFoot from '../assets/dogFoot.png';
import { Container } from '../styles/components/generalStyled';
import {
    Wrapper,
    CardWhite,
    CardBrown,
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
} from '../styles/components/chooseStyled';
import DogBg from '../assets/pageBg.png';

const initialOptionsValue = {
    shelterOption: '',
    shelterID: '',
    value: '',
};

export const Choose: React.FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);
    const { shelters } = useSelector((state: IShelters) => state.shelters);

    const [options, setOptions] = React.useState<any>(initialOptionsValue);

    const dispatch = useDispatch();

    const submitData = (data: any) => {
        dispatch(addFormData(data));
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
                        <Title>{translate('chooseTitle', language)}</Title>
                    </TitleContainer>

                    <Container>
                        <CardWhite
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
                        </CardWhite>

                        <CardBrown
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
                        </CardBrown>
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
                            5€
                        </ValueField>

                        <ValueField
                            selected={options.value === '10'}
                            onClick={() => setOptions({ ...options, value: '10' })}
                        >
                            10€
                        </ValueField>

                        <ValueField
                            selected={options.value === '20'}
                            onClick={() => setOptions({ ...options, value: '20' })}
                        >
                            20€
                        </ValueField>

                        <ValueField
                            selected={options.value === '50'}
                            onClick={() => setOptions({ ...options, value: '50' })}
                        >
                            50€
                        </ValueField>

                        <ValueField
                            selected={options.value === '100'}
                            onClick={() => setOptions({ ...options, value: '100' })}
                        >
                            100€
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
                        <LinkTo to="./UserData" onClick={() => submitData(options)}>
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
