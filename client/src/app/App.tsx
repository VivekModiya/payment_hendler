import { Section } from '../components/Section/Sections';
import { routes } from '../routes/route';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './ContextProvider.tsx';
import { ValidateUser } from './ValidateUser.tsx';
import './app.css';
import '@fontsource/roboto';

export const App = () => {
    return (
        <ContextProvider>
            <HashRouter>
                <Section>
                    <Routes>
                        {routes.map((route) => {
                            return (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={
                                        <ValidateUser Route={route.component} />
                                    }
                                />
                            );
                        })}
                        <Route path='/'></Route>
                    </Routes>
                </Section>
            </HashRouter>
        </ContextProvider>
    );
};
