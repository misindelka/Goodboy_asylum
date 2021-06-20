import React from 'react';
import { useSelector } from 'react-redux';
import GlobalStyle from './styles/globalStyle';
import { translate } from './i18n';
import { RootState } from './redux/index';

const App: React.FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);
    return (
        <div>
            <p>{translate('home', language)}</p>
            GOODBOY
            <GlobalStyle />
        </div>
    );
};

export default App;
