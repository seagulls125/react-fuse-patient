import React from 'react';
import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'reportsPage', en);
i18next.addResourceBundle('tr', 'reportsPage', tr);
i18next.addResourceBundle('ar', 'reportsPage', ar);


const ReportsConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/reports/billing',
            component: React.lazy(() => import('./Billing'))
        },
        {
          path     : '/reports/standards',
          component: React.lazy(() => import('./Standards'))
      },
      {
        path     : '/reports/flowsheet',
        component: React.lazy(() => import('./Flowsheets'))
    }
    ]
};

export default ReportsConfig;


