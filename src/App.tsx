import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getShelters } from './redux/actions/sheltersActions';
import GlobalStyle from './styles/globalStyle';
import { routes } from './router';
import { Header } from './header';
import { Footer } from './footer';

const App: React.FC = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getShelters());
    }, [dispatch]);
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

            <Footer />
            <GlobalStyle />
        </Router>
    );
};

export default App;
