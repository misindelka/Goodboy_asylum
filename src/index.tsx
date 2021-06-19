import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import App from './App';
import * as theme from './styles/theme';
import store from './redux/store';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Suspense fallback="...Loading">
                    <App />
                </Suspense>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
