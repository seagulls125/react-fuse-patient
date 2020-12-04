import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ExampleConfig from 'app/main/example/ExampleConfig';
import ChartingConfig from 'app/main/charting/ChartingConfig';
import DashboardConfig from 'app/main/dashboard/DashboardConfig';
import ReportsConfig from 'app/main/reports/ReportsConfig';

const routeConfigs = [
	ExampleConfig,
	ChartingConfig,
	DashboardConfig,
	ReportsConfig
];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/example" />
	}
];

export default routes;
