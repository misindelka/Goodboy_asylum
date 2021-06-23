/* eslint-disable prettier/prettier */

import { Choose } from './pages/chooseSupport';
import { UserData } from './pages/userDataForm';
import { Submit } from './pages/submitSupport';

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
