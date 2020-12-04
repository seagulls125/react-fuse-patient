import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';

import ChartingToolbar from './ChartingToolbar';
import ChartingContent from './ChartingContent';

const useStyles = makeStyles(theme => ({
  layoutRoot: {},
  toolbar: {
    width : '100%'
  },
}));

// const customStyles = makeStyles({
//   toolbar: {
//     width : '100%'
//   },
// });


function ExamplePage(props) {
  const classes = useStyles(props);
  // const styles = customStyles;
  // console.log(styles);
	const { t } = useTranslation('chartPage');

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="p-24">
					<h4>{t('TITLE')}</h4>
				</div>
			}
			contentToolbar={
				<div className={["px-24",classes.toolbar].join(' ')}>
          <ChartingToolbar />
				</div>
			}
			content={
				<div className="p-24">
					<h4>Content</h4>
					<br />
          <ChartingContent />
				</div>
			}
		/>
	);
}

export default ExamplePage;
