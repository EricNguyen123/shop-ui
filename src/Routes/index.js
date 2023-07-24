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
    {
        path: config.routes.ipad10,
        component: Ipad,
    },
    {
        path: config.routes.ipad9,
        component: Ipad,
    },
    {
        path: config.routes.ipadair,
        component: Ipad,
    },
    {
        path: config.routes.ipadmini,
        component: Ipad,
    },
    {
        path: config.routes.ipadprom1,
        component: Ipad,
    },
    {
        path: config.routes.ipadprom2,
        component: Ipad,
    },
    {
        path: config.routes.imac,
        component: Mac,
    },
    {
        path: config.routes.macbookair,
        component: Mac,
    },
    {
        path: config.routes.macbookpro,
        component: Mac,
    },
    {
        path: config.routes.macmini,
        component: Mac,
    },
    {
        path: config.routes.macpro,
        component: Mac,
    },
    {
        path: config.routes.macstudio,
        component: Mac,
    },
    {
        path: config.routes.applewatchse,
        component: Watch,
    },
    {
        path: config.routes.applewatchseries3,
        component: Watch,
    },
    {
        path: config.routes.applewatchseries6,
        component: Watch,
    },
    {
        path: config.routes.applewatchseries7,
        component: Watch,
    },
    {
        path: config.routes.applewatchseries8,
        component: Watch,
    },
    {
        path: config.routes.applewatchultra,
        component: Watch,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
