import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { useFetch } from '../../hooks/useFetch';
import Loader from '../Loader/Loader';
import { ContextApp } from '../../context/reducer';
import AllUsersList from './AllUsersList/AllUsersList';
import { makeStyles } from '@material-ui/core/styles';

export default function UsersList() {
	const { isLoading } = useFetch('https://randomuser.me/api/?results=10');
	const { state } = useContext(ContextApp);
	const classes = useStyles();

	if (isLoading) {
		return <Loader />;
	}

	if (state.loadError) {
		return <p>Что-то пошло не так. Обновите страницу позже</p>;
	}

	return (
		<Grid
			container
			direction='row'
			justify='center'
			alignItems='flex-start'
			className={classes.root}
		>
			<AllUsersList />
		</Grid>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		padding: 32,
	},
}));
