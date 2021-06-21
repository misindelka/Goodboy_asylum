/* eslint-disable prettier/prettier */

import { Choose } from './pages/choose';
import { UserData } from './pages/userData';
import { Submit } from './pages/submit';

export const routes = [
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
