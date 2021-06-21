import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import { routes } from './router';
import { Header } from './header';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
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
