import routeConfig from '~/config/routes';

//Layouts
import { HeaderOnly } from '~/components/Layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Public routes
const publicRoutes = [
    { path: routeConfig.home, component: Home },
    { path: routeConfig.following, component: Following },
    { path: routeConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routeConfig.profile, component: Profile },
    { path: routeConfig.search, component: Search, layout: null },
];

//Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
