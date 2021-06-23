/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { translate } from '../i18n';
import { RootState } from '../redux/index';
import Wallet from '../assets/wallet.png';
import DogFoot from '../assets/dogFoot.png';
import { IShelters } from '../redux/types';

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

export const Choose: React.FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);
    const { shelters } = useSelector((state: IShelters) => state.shelters);
    const [selectedOption, setOption] = React.useState('');
    const [selectedValue, setValue] = React.useState('');
    const [selectedShleter, setShelter] = React.useState('0');

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
                                selectedOption === `${translate('chooseSupportShelter', language)}`
                            }
                            onClick={() =>
                                setOption(`${translate('chooseSupportShelter', language)}`)
                            }
                        >
                            <CardSelectGrey>
                                <Icon src={Wallet} />
                            </CardSelectGrey>
                            <CardDesc>{translate('chooseSupportShelter', language)}</CardDesc>
                        </CardWhite>

                        <CardBrown
                            selected={
                                selectedOption === `${translate('cooseSupportTrust', language)}`
                            }
                            onClick={() => setOption(`${translate('cooseSupportTrust', language)}`)}
                        >
                            <CardSelectBrown>
                                <Icon src={DogFoot} />
                            </CardSelectBrown>
                            <CardDesc>{translate('cooseSupportTrust', language)}</CardDesc>
                        </CardBrown>
                    </Container>

                    {selectedOption === `${translate('chooseSupportShelter', language)}` && (
                        <>
                            <LabelContainer>
                                <ValueTitle>{translate('chooseAboutProject', language)}</ValueTitle>
                                <ValueTitle>{translate('chooseVoluntary', language)}</ValueTitle>
                            </LabelContainer>

                            <Container>
                                <StyledSelect
                                    value={selectedShleter}
                                    onChange={(e: any) => setShelter(e.target.value)}
                                >
                                    <option> {translate('chooseFromList', language)}</option>
                                    {shelters.shelters?.map((i: IShelters) => (
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
                        <ValueField selected={selectedValue === '5'} onClick={() => setValue('5')}>
                            5€
                        </ValueField>

                        <ValueField
                            selected={selectedValue === '10'}
                            onClick={() => setValue('10')}
                        >
                            10€
                        </ValueField>

                        <ValueField
                            selected={selectedValue === '20'}
                            onClick={() => setValue('20')}
                        >
                            20€
                        </ValueField>

                        <ValueField
                            selected={selectedValue === '50'}
                            onClick={() => setValue('50')}
                        >
                            50€
                        </ValueField>

                        <ValueField
                            selected={selectedValue === '100'}
                            onClick={() => setValue('100')}
                        >
                            100€
                        </ValueField>

                        <ValueField
                            selected={selectedValue === 'custom'}
                            onClick={() => setValue('custom')}
                        >
                            <InputValueField
                                type="text"
                                placeholder="..."
                                onChange={(e: any) => setValue(e.target.value)}
                            />
                            €
                        </ValueField>
                    </Container>
                    <LabelContainer>
                        <Container />
                        <LinkTo to="./UserData">{translate('continueButton', language)}</LinkTo>
                    </LabelContainer>
                </ContentContainer>

                <Container>
                    <Image src={DogBg} />
                </Container>
            </Wrapper>
        </>
    );
};
