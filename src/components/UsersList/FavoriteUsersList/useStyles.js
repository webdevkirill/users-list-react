import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		width: 400,
		marginRight: 16,
		border: '1px solid #3f51b5',
		paddingTop: 8,
	},
	title: {
		textAlign: 'center',
		marginBottom: 37,
	},
	dropzone: {
		width: '100%',
		height: 'calc(100% - 64px)',
		padding: 8,
	},
}));
