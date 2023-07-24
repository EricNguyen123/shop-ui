import Home from '~/pages/Home';
import Ipad from '~/pages/Ipad';
import Iphone from '~/pages/Iphone';
import Mac from '~/pages/Mac';
import ServicePage from '~/pages/ServicePage';
import SoundPage from '~/pages/SoundPage';
import Watch from '~/pages/Watch';
import AccessoryPage from '~/pages/AccessoryPage';
import ProductItem from '~/pages/ProductItem';

import config from '~/config';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.ipad,
        component: Ipad,
    },
    {
        path: config.routes.accessorypage,
        component: AccessoryPage,
    },
    {
        path: config.routes.iphone,
        component: Iphone,
    },
    {
        path: config.routes.mac,
        component: Mac,
    },
    {
        path: config.routes.servicepage,
        component: ServicePage,
    },
    {
        path: config.routes.soundpage,
        component: SoundPage,
    },
    {
        path: config.routes.watch,
        component: Watch,
    },
    {
        path: config.routes.productitem,
        component: ProductItem,
    },
    {
        path: config.routes.iphone11series,
        component: Iphone,
    },
    {
        path: config.routes.iphone12series,
        component: Iphone,
    },
    {
        path: config.routes.iphone13series,
        component: Iphone,
    },
    {
        path: config.routes.iphone14series,
        component: Iphone,
    },
    {
        path: config.routes.iphoneSE,
        component: Iphone,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
