import React, { useContext } from 'react';
import { useStyles } from './useStyles';
import { appendDraggableItem } from '../../../context/actions';
import { ContextApp } from '../../../context/reducer';
import UserCard from '../../UserCard/UserCard';

export default function FavoriteUsersList() {
	const classes = useStyles();
	const {
		state: { favoriteList, draggableUser },
		dispatch,
	} = useContext(ContextApp);

	const dropHandler = (e) => {
		const id = e.dataTransfer.getData('text');
		const [key, idx] = id.split('-');
		dispatch(appendDraggableItem(key, idx));
		e.dataTransfer.clearData();
	};

	return (
		<div className={classes.root}>
			<p className={classes.title}>Избранные</p>
			<div
				className={`drop-zone ${classes.dropzone}`}
				onDragOver={(e) => e.preventDefault()}
				onDrop={(e) => dropHandler(e)}
			>
				{favoriteList.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
				{draggableUser && (
					<UserCard user={draggableUser} preview={true} />
				)}
			</div>
		</div>
	);
}
