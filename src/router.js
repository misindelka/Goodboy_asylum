/* eslint-disable prettier/prettier */

import { ChooseSupport } from './pages/chooseSupport';
import { UserDataForm } from './pages/userDataForm';
import { SubmitSupport } from './pages/submitSupport';

export const routes = [
	{
		path: '/ChooseSupport',
		component: ChooseSupport,
		routeName: 'ChooseHelp',
	},
	{
		path: '/UserDataForm',
		component: UserDataForm,
		routeName: 'UserData',
	},
	{
		path: '/SubmitSupport',
		component: SubmitSupport,
		routeName: 'Submit',
	},
];
