import { Navigate } from 'react-router-dom';
import { Route } from '../models/Route';
import { CreateUser, Login, Navigator, PaymentDetails, PaymentListing } from '../pages';
import { PaymentForm } from '../pages/PaymentForm';
export const PATH = {
    HOME: '/',
    LOGIN: '/login',
    NAVIGATOR: '/navigator',
    ADD_DETAIL: '/payment-details/add',
    GET_DETAIL: '/payment-details/:id',
    LIST_DETAILS: '/payment-details/list',
    CREATE_USER: '/create-user',
    OTHERS: '*',
};

export const routes: Route[] = [
    {
        path: PATH.LOGIN,
        exact: true,
        component: <Login />,
    },
    {
        path: PATH.NAVIGATOR,
        exact: true,
        component: <Navigator />,
    },
    {
        path: PATH.ADD_DETAIL,
        exact: true,
        component: <PaymentForm />,
    },
    {
        path: PATH.GET_DETAIL,
        exact: true,
        component: <PaymentDetails />,
    },
    {
        path: PATH.LIST_DETAILS,
        exact: true,
        component: <PaymentListing />,
    },
    {
        path: PATH.CREATE_USER,
        exact: true,
        component: <CreateUser />,
    },
    {
        path: PATH.OTHERS,
        exact: true,
        component: <Navigate to='/login' replace={true} />,
    },
    {
        path: PATH.HOME,
        exact: true,
        component: <Navigate to='/login' replace={true} />,
    },
];
