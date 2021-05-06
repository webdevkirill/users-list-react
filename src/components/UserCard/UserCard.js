import React, { useContext } from 'react';
import { useStyles } from './useStyles';
import TrashIcon from './TrashIcon';
import { ContextApp } from '../../context/reducer';
import { deleteFavoriteUser, setDraggableItem } from '../../context/actions';

export default function UserCard({ user, preview }) {
	const classes = useStyles();
	const { dispatch } = useContext(ContextApp);

	const dragStartHandler = (event) => {
		event.dataTransfer.setData(
			'text/plain',
			`${user.keyInData}-${user.idx}`
		);
		dispatch(setDraggableItem(user));
	};

	const dragEndHandler = (e) => {
		dispatch(setDraggableItem(null));
	};

	const deleteFavoriteUserHandler = () => {
		dispatch(deleteFavoriteUser(user.keyInData, user.idx));
	};

	return (
		<div
			className={`user-card ${classes.card} ${
				!user.isFavorite && classes.drag
			} ${preview && classes.preview}`}
			draggable={!user.isFavorite}
			onDragStart={dragStartHandler}
			onDragEnd={dragEndHandler}
		>
			<div className={classes.userInfo}>
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
			{user.isFavorite && (
				<TrashIcon onClickHandler={deleteFavoriteUserHandler} />
			)}
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
