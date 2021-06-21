import * as React from 'react';
import { useSelector } from 'react-redux';
import { translate } from './i18n';
import { RootState } from './redux/index';

import {
    Wrapper,
    Card,
    CardTitle,
    CardContent,
    LinkTo,
    LogoImage,
    LogoWrapper,
    LogoText,
} from './styles/components/footerStyled';
import DogLogo from './assets/dogLogo.png';

export const Footer: React.FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);
    return (
        <Wrapper>
            <Card>
                <LogoWrapper>
                    <LogoImage src={DogLogo} />
                    <LogoText>{translate('logoTitle', language)}</LogoText>
                </LogoWrapper>
            </Card>
            <Card>
                <CardTitle>{translate('companyName', language)}</CardTitle>
                <CardContent>
                    <LinkTo to="">{translate('aboutLink', language)}</LinkTo>
                    <LinkTo to="">{translate('guideLink', language)}</LinkTo>
                    <LinkTo to="">{translate('contactLink', language)}</LinkTo>
                </CardContent>
            </Card>

            <Card>
                <CardTitle>{translate('companyName', language)}</CardTitle>
                <CardContent>{translate('lorem', language)}</CardContent>
            </Card>
            <Card>
                <CardTitle>{translate('companyName', language)}</CardTitle>
                <CardContent>{translate('lorem', language)}</CardContent>
            </Card>
        </Wrapper>
    );
};
