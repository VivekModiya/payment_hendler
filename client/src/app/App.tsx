import { Section } from '../components/Section/Sections';
import { routes } from '../routes/route';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import '@fontsource/roboto';

export const App = () => {
    return (
        <HashRouter>
            <Section>
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
