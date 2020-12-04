import React from 'react';
import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'dashboardPage', en);
i18next.addResourceBundle('tr', 'dashboardPage', tr);
i18next.addResourceBundle('ar', 'dashboardPage', ar);


const DashboardConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/dashboard/calendar',
            component: React.lazy(() => import('./Calendar'))
        },
        {
          path     : '/dashboard/file_manager',
          component: React.lazy(() => import('./FileManager'))
      },
      {
        path     : '/dashboard/task_manager',
        component: React.lazy(() => import('./TaskManager'))
    }
    ]
};

export default DashboardConfig;


