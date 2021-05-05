import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { ContextApp } from '../../../context/reducer';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './useStyles';
import { changeUsersDropdown } from '../../../context/actions';

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
			{Object.keys(data).map((key) => (
				<div className={classes.dropdown} key={key}>
					<p
						className={classes.dropdownButton}
						onClick={() => dispatch(changeUsersDropdown(key))}
					>
						{`${key * 10 + 1}-${key * 10 + 10}`}
					</p>
					{data[key].isOpen &&
						data[key].users.map((user) => (
							<div className={classes.card} key={user.id}>
								<img
									src={user.img}
									alt={`Изображение профиля ${user.name}`}
								/>
								<div className={classes.userText}>
									<p>
										{user.name}, дата регистрации:{' '}
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
