import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { ContextApp } from '../../../context/reducer';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './useStyles';

export default function AllUsersList() {
	const { state, dispatch } = useContext(ContextApp);
	const { data } = state;
	const [inputValue, setInputValue] = useState('');
	const classes = useStyles();

	return (
		<Grid container direction='column' className={classes.root}>
			<TextField
				id='search-input'
				label='Поиск'
				variant='outlined'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				className={classes.input}
			/>
		</Grid>
	);
}
