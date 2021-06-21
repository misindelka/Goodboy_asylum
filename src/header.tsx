import * as React from 'react';
import { useSelector } from 'react-redux';
import { translate } from './i18n';
import { RootState } from './redux/index';

import { Wrapper, LogoImage, LinkTo } from './styles/components/headerStyled';
import { Container } from './styles/components/generalStyled';
import facebookLogo from './assets/facebookLogo.png';
import instagramLogo from './assets/instagramLogo.png';

export const Header: React.FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);
    return (
        <Wrapper>
            <p>{translate('companyName', language)}</p>

            <Container>
                <LinkTo to="">
                    <LogoImage src={facebookLogo} />
                </LinkTo>
                <LinkTo to="">
                    <LogoImage src={instagramLogo} />
                </LinkTo>
            </Container>
        </Wrapper>
    );
};
