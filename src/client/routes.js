import App from './app';
import HomePage from './pages/homePage';
import test from './pages/test';
import NotFoundPage from './pages/notFound404Page';

export default [
    // {
    //     path: '/new-url',
    //     ...App,
    //     routes: [
    //         {
    //             path: '/new-url/:id',
    //             ...newUrl
    //         },
    //         {
    //             ...newUrls
    //         }
    //     ]
    // },
    {
        path: '/test',
        exact: true,
        ...App,
        routes: [
            {
                ...test
            }
        ]
    },
    {
        path: '/',
        exact: true,
        ...App,
        routes: [
            {
                ...HomePage
            }
        ]
    },
    {
        path: '*',
        ...App,
        routes: [
            {
                ...NotFoundPage
            }
        ]
    }
];

