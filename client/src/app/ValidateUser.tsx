import { useContext } from 'react';
import { GlobalContext } from './ContextProvider';
import { useLocation } from 'react-router-dom';
import { Login } from '../pages';

export interface ValidateUserProps {
    Route: JSX.Element;
}

export const ValidateUser = (props: ValidateUserProps) => {
    const { Route } = props;
    const { user } = useContext(GlobalContext);
    const { pathname } = useLocation();

    if ((user?.role && user?.userId) || pathname === '/login') {
        return Route;
    } else {
        return <Login />;
    }
};
