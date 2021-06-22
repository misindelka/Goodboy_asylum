import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { translate } from '../i18n';
import { RootState } from '../redux/index';
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
    PriceField,
    PriceTitle,
    LabelContainer,
    CardSelectBrown,
    CardSelectGrey,
    Icon,
    LinkTo,
    CardDesc,
} from '../styles/components/chooseStyled';
import DogBg from '../assets/pageBg.png';

export const Choose: React.FC = () => {
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
                        <Title>{translate('chooseTitle', language)}</Title>
                    </TitleContainer>

                    <Container>
                        <CardWhite>
                            <CardSelectGrey>
                                <Icon src={Wallet} />
                            </CardSelectGrey>
                            <CardDesc>{translate('chooseSupportAsylum', language)}</CardDesc>
                        </CardWhite>

                        <CardBrown>
                            <CardSelectBrown>
                                <Icon src={DogFoot} />
                            </CardSelectBrown>
                            <CardDesc>{translate('cooseSupportTrust', language)}</CardDesc>
                        </CardBrown>
                    </Container>

                    <LabelContainer>
                        <PriceTitle>{translate('chooseAboutProject', language)}</PriceTitle>
                        <PriceTitle>{translate('chooseVoluntary', language)}</PriceTitle>
                    </LabelContainer>

                    <Container>
                        <StyledSelect>
                            <option value="">{translate('chooseFromList', language)}</option>
                            <option value="">Pes</option>
                            <option value="">Pejsek</option>
                        </StyledSelect>
                    </Container>

                    <LabelContainer>
                        <PriceTitle>{translate('choosePriceToDonate', language)}</PriceTitle>
                    </LabelContainer>

                    <Container>
                        <PriceField>5€</PriceField>
                        <PriceField>10€</PriceField>
                        <PriceField>20€</PriceField>
                        <PriceField>30€</PriceField>
                        <PriceField>50€</PriceField>
                        <PriceField>100€</PriceField>
                        <PriceField>...€</PriceField>
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
