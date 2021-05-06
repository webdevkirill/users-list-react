import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { ContextApp } from '../../../context/reducer';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './useStyles';
import { changeUsersDropdown } from '../../../context/actions';
import UserCard from '../../UserCard/UserCard';

export default function AllUsersList() {
	const {
		state: { data, changesFlag },
		dispatch,
	} = useContext(ContextApp);
	const [inputValue, setInputValue] = useState('');
	const [filteredData, setFilteredData] = useState({ ...data });
	const classes = useStyles();

	useEffect(() => {
		const regExp = new RegExp(`${inputValue}`, 'gi');
		setFilteredData(
			Object.keys(data).reduce((acc, key) => {
				if (inputValue.trim()) {
					acc[key] = { isOpen: data[key].isOpen };
					acc[key].users = data[key].users
						.filter(
							(user) =>
								user.name
									.toLowerCase()
									.indexOf(inputValue.toLowerCase()) !== -1
						)
						.map((user) => ({
							...user,
							name: user.name.replace(
								regExp,
								(match) => `<b>${match}</b>`
							),
						}));
				} else {
					acc[key] = data[key];
				}

				return acc;
			}, {})
		);
	}, [data, inputValue, changesFlag]);

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
			{Object.keys(filteredData).map((key) => (
				<div
					className={`${classes.dropdown} ${
						filteredData[key].users.length > 0
							? ''
							: classes.disabled
					}`}
					key={key}
				>
					<p
						className={classes.dropdownButton}
						onClick={() => dispatch(changeUsersDropdown(key))}
					>
						{`${key * 10 + 1}-${key * 10 + 10}`}
					</p>
					{filteredData[key].isOpen &&
						filteredData[key].users.map((user) => {
							if (user.isFavorite) {
								return null;
							}
							return <UserCard key={user.id} user={user} />;
						})}
				</div>
			))}
		</Grid>
	);
}
