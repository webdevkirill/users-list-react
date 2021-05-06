import React from 'react';
import { useStyles } from './useStyles';

export default function UserCard({ user }) {
	const classes = useStyles();

	const dragStartHandler = (event) => {
		event.dataTransfer.setData(
			'text/plain',
			`${user.keyInData}-${user.idx}`
		);
	};

	return (
		<div
			className={`${classes.card} ${!user.isFavorite && classes.drag}`}
			draggable={!user.isFavorite}
			onDragStart={(e) => dragStartHandler(e)}
		>
			<img src={user.img} alt={`Изображение профиля ${user.name}`} />
			<div className={classes.userText}>
				<p>
					<span
						dangerouslySetInnerHTML={{
							__html: user.name,
						}}
					/>
					, дата регистрации:{' '}
					{localDateFromRegisterDate(user.registered.date)}
				</p>
				<p className={classes.userEmail}>{user.email}</p>
			</div>
		</div>
	);
}

const localDateFromRegisterDate = (registerDate) => {
	const date = new Date(registerDate);
	const day = ('0' + date.getDate()).slice(-2);
	const month = ('0' + (date.getMonth() + 1)).slice(-2);
	const year = date.getFullYear();
	return `${day}-${month}-${year}`;
};
