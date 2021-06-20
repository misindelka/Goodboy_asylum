import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GlobalStyle from './styles/globalStyle';
import { translate } from './i18n';
import { RootState } from './redux/index';
import { routes } from './router';
import { Header } from './header';

const App: React.FC = () => {
    const { language } = useSelector((state: RootState) => state.lang);

    return (
        <Router>
            <div>
                <Header />
                <p>{translate('home', language)}</p>
                GOODBOY
            </div>
            <Switch>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} component={route.component} />
                ))}
            </Switch>

            <GlobalStyle />
        </Router>
    );
};

export default App;
