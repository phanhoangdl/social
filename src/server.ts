import { validateEnv } from './core/utils';
import 'dotenv/config'

import App from './app';
import { IndexRoute } from './modules/index';
import { AboutRoute } from './modules/about';

validateEnv();

const routes = [new IndexRoute(),new AboutRoute()]

const app = new App(routes);

app.listen();