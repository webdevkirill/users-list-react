import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	card: {
		border: '1px solid #3f51b5',
		borderRadius: 4,
		marginBottom: 8,
		fontSize: 14,
		display: 'flex',
		alignItems: 'center',
	},
	drag: {
		cursor: 'grab',
		'&:active': {
			cursor: 'grabbing',
		},
	},
	userText: {
		display: 'flex',
		flexDirection: 'column',
		padding: 4,
	},
	userEmail: {
		marginTop: 4,
	},
}));
