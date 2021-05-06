import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 400,
		marginRight: 16,
		border: '1px solid #3f51b5',
		padding: 8,
	},
	input: {
		marginBottom: 8,
	},
	dropdown: {
		display: 'flex',
		flexDirection: 'column',
		fontSize: 16,
		borderRadius: 4,
		'&:last-of-type': {
			marginBottom: 0,
		},
	},
	dropdownButton: {
		cursor: 'pointer',
		borderBottom: '1px solid #3f51b5',
		marginBottom: 8,
		padding: '4px 0',
	},
	disabled: {
		color: '#AAA',
		opacity: 0.3,
	},
}));
