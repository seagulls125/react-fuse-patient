import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'example-component',
				title: 'Example',
				translate: 'EXAMPLE',
				type: 'item',
				icon: 'whatshot',
				url: '/example'
			},
			{
				id: 'example-component1',
				title: 'Example1',
				// translate: 'EXAMPLE',
				type: 'item',
				icon: 'whatshot',
				url: '/example1'
			}
		],

	},
	{
		id : 'dashboard',
		title : 'Dashboard',
		icon : 'apps',
		type: 'collapse',
		children : [
			{
				id : 'calendar',
				title : 'Calendar',
				type : 'item',
				url : '/dashboard/calendar'
			},
			{
				id : 'task_manager',
				title : 'Task Manager',
				type : 'item',
				url : '/dashboard/task_manager'
			},
			{
				id : 'file_manager',
				title : 'File Manager',
				type : 'item',
				url : '/dashboard/file_manager'
			}
		]
	},
	{
		id : 'charting',
		title : 'Charting',
		icon : 'table_chart',
		type: 'collapse',
		children : [
			{
				id : 'somr',
				title : 'SOMR',
				type : 'item',
				url : '/charting'
			},
			{
				id : 'pomr',
				title : 'POMR',
				type : 'item',
				url : '/charting1'
			},
		]
	},
	{
		id : 'reports',
		title : 'Reports',
		icon : 'report',
		type: 'collapse',
		children : [
			{
				id : 'standards',
				title : 'Standards of Care',
				type : 'item',
				url : '/reports/standards'
			},
			{
				id : 'flowsheets',
				title : 'Flowsheets',
				type : 'item',
				url : '/reports/flowsheet'
			},
			{
				id : 'billing',
				title : 'Billing',
				type : 'item',
				url : '/reports/billing'
			},
		]
	},
	// {
	// 	id : 'administration',
	// 	title : 'Administration',
	// 	type : 'group',
	// 	icon : 'verified_user',
	// 	children : [
	// 		{
	// 			id : 'current_item',
	// 			title : 'Current Item',
	// 			type : 'item',
	// 			// url : '/admin/user'
	// 		},
	// 	]
	// }
];

export default navigationConfig;
