import { Route } from '../models/Route';
import { Login, Navigator, PaymentListing } from '../pages';
import { Template } from '../pages/PaymentForm';
export const PATH = {
    LOGIN: '/login',
    NAVIGATOR: '/navigator',
    ADD_DETAIL: 'payment-details/add',
    GET_DETAIL: '/payment-details/:id',
    LIST_DETAILS: '/payment-details/list',
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
        component: <Template />,
    },
    {
        path: PATH.GET_DETAIL,
        exact: true,
        component: <h1>Vivek</h1>,
    },
    {
        path: PATH.LIST_DETAILS,
        exact: true,
        component: <PaymentListing />,
    },
];
