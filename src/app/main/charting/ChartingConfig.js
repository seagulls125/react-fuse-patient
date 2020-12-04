import React from 'react';
import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'chartPage', en);
i18next.addResourceBundle('tr', 'chartPage', tr);
i18next.addResourceBundle('ar', 'chartPage', ar);


const ChartingConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/charting',
            component: React.lazy(() => import('./Charting'))
        },
        {
            path     : '/charting1',
            component: React.lazy(() => import('./Charting'))
        }
    ]
};

export default ChartingConfig;


