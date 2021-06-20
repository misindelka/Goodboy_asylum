/* eslint-disable prettier/prettier */

import { Home } from './pages/home';
import { Choose } from './pages/choose';
import { UserData } from './pages/userData';
import { Submit } from './pages/submit';

export const routes = [
	{
		path: '/Home',
		component: Home,
		routeName: 'Home',
	},
	{
		path: '/Choose',
		component: Choose,
		routeName: 'ChooseHelp',
	},
	{
		path: '/UserData',
		component: UserData,
		routeName: 'UserData',
	},
	{
		path: '/Submit',
		component: Submit,
		routeName: 'Submit',
	},
];
