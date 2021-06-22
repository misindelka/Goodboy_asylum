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
} from '../styles/components/chooseStyled';
import DogBg from '../assets/pageBg.png';

interface IProps {
    Asylum: boolean;
    Trust: boolean;
    ten: boolean;
    five: boolean;
    twenty: boolean;
    fifty: boolean;
    hundred: boolean;
    custom: boolean;
}

export const Choose: React.FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);
    const { shelters } = useSelector((state: IShelters) => state.shelters);
    const [selectOption, setOption] = React.useState<IProps | any>({
        Asylum: false,
        Trust: true,
    });
    const [selectValue, setValue] = React.useState<IProps | any>({
        ten: false,
        five: true,
        twenty: false,
        fifty: false,
        hundred: false,
        custom: false,
    });

    const handleToggleOption = (value: string) => {
        setOption((prev: any) => ({ [value]: !prev[value] }));
    };

    const handleToggleValue = (value: string) => {
        setValue((prev: any) => ({ [value]: !prev[value] }));
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
                            selected={selectOption.Asylum}
                            onClick={() => handleToggleOption('Asylum')}
                        >
                            <CardSelectGrey>
                                <Icon src={Wallet} />
                            </CardSelectGrey>
                            <CardDesc>{translate('chooseSupportAsylum', language)}</CardDesc>
                        </CardWhite>

                        <CardBrown
                            selected={selectOption.Trust}
                            onClick={() => handleToggleOption('Trust')}
                        >
                            <CardSelectBrown>
                                <Icon src={DogFoot} />
                            </CardSelectBrown>
                            <CardDesc>{translate('cooseSupportTrust', language)}</CardDesc>
                        </CardBrown>
                    </Container>

                    <LabelContainer>
                        <ValueTitle>{translate('chooseAboutProject', language)}</ValueTitle>
                        <ValueTitle>{translate('chooseVoluntary', language)}</ValueTitle>
                    </LabelContainer>

                    <Container>
                        <StyledSelect>
                            <option value="">{translate('chooseFromList', language)}</option>
                            {shelters.shelters?.map((i: IShelters) => (
                                <option key={i.id} value="">
                                    {i.name}
                                </option>
                            ))}
                        </StyledSelect>
                    </Container>

                    <LabelContainer>
                        <ValueTitle>{translate('choosePriceToDonate', language)}</ValueTitle>
                    </LabelContainer>

                    <Container>
                        <ValueField
                            selected={selectValue.five}
                            onClick={() => handleToggleValue('five')}
                        >
                            5€
                        </ValueField>

                        <ValueField
                            selected={selectValue.ten}
                            onClick={() => handleToggleValue('ten')}
                        >
                            10€
                        </ValueField>

                        <ValueField
                            selected={selectValue.twenty}
                            onClick={() => handleToggleValue('twenty')}
                        >
                            20€
                        </ValueField>

                        <ValueField
                            selected={selectValue.fifty}
                            onClick={() => handleToggleValue('fifty')}
                        >
                            50€
                        </ValueField>

                        <ValueField
                            selected={selectValue.hundred}
                            onClick={() => handleToggleValue('hundred')}
                        >
                            100€
                        </ValueField>

                        <ValueField
                            selected={selectValue.custom}
                            onClick={() => handleToggleValue('custom')}
                        >
                            ...€
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
