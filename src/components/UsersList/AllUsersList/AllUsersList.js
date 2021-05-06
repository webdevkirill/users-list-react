import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { ContextApp } from '../../../context/reducer';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './useStyles';
import { changeUsersDropdown } from '../../../context/actions';

export default function AllUsersList() {
	const {
		state: { data },
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

				if (acc[key].users.length > 0) {
					acc[key].isDisabled = false;
				} else {
					acc[key].isDisabled = true;
				}
				return acc;
			}, {})
		);
	}, [data, inputValue]);

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
						filteredData[key].isDisabled ? classes.disabled : ''
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
						filteredData[key].users.map((user) => (
							<div className={classes.card} key={user.id}>
								<img
									src={user.img}
									alt={`Изображение профиля ${user.name}`}
								/>
								<div className={classes.userText}>
									<p>
										<span
											dangerouslySetInnerHTML={{
												__html: user.name,
											}}
										/>
										, дата регистрации:{' '}
										{localDateFromRegisterDate(
											user.registered.date
										)}
									</p>
									<p className={classes.userEmail}>
										{user.email}
									</p>
								</div>
							</div>
						))}
				</div>
			))}
		</Grid>
	);
}

const localDateFromRegisterDate = (registerDate) => {
	const date = new Date(registerDate);
	const day = ('0' + date.getDate()).slice(-2);
	const month = ('0' + (date.getMonth() + 1)).slice(-2);
	const year = date.getFullYear();
	return `${day}-${month}-${year}`;
};
