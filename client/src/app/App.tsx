import { Section } from '../components/Section/Sections';
import { routes } from '../routes/route';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Template } from '../pages';
import './app.css';
import '@fontsource/roboto';

export const App = () => {
    return (
        <HashRouter>
            <Section>
                <Template
                    id={'123'}
                    sumOfRupees={654323}
                    address='Ahmedabad, Gujarat, India, Ahmedabad, Gujarat, India, Ahmedabad, Gujarat, India, Ahmedabad, Gujarat, India, Ahmedabad, Gujarat, India, '
                    date='02/06/2024'
                    drawnOn='Dont know what is this'
                    pan='SDFG456FGK'
                    paymentReference='987654345678987657876'
                    receivedFrom='Vivek Modiay'
                />
                <Routes>
                    {routes.map((route) => {
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.component}
                            />
                        );
                    })}
                    <Route path='/'></Route>
                </Routes>
            </Section>
        </HashRouter>
    );
};
