import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 320,
		marginRight: 16,
		border: '1px solid #3f51b5',
		padding: 8,
	},
	input: {
		marginBottom: 8,
	},
}));
