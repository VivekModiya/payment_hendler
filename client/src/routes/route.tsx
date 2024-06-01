import { Route } from '../models/Route';
import { Navigator, PaymentListing } from '../pages';
import { PaymentForm } from '../pages/PaymentForm/PaymentForm';
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
        component: <h1>Vivek</h1>,
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
        component: <h1>Vivek</h1>,
    },
    {
        path: PATH.LIST_DETAILS,
        exact: true,
        component: <PaymentListing />,
    },
];
