import React, { useContext, useState } from 'react';
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

	const [isOver, setIsOver] = useState(false);

	const dragEnterHandler = (e) => {
		e.preventDefault();
		if (e.target.closest('.drop-zone')) {
			setIsOver(true);
		}
	};

	const dragLeaveHandler = (e) => {
		e.preventDefault();
		if (!e.target.closest('.drop-zone')) {
			setIsOver(false);
		}
	};

	const dropHandler = (e) => {
		const id = e.dataTransfer.getData('text');
		const [key, idx] = id.split('-');
		setIsOver(false);
		dispatch(appendDraggableItem(key, idx));
		e.dataTransfer.clearData();
	};

	return (
		<div className={classes.root}>
			<p className={classes.title}>Избранные</p>
			<div
				className={`drop-zone ${classes.dropzone}`}
				onDragEnter={(e) => dragEnterHandler(e)}
				onDragLeave={(e) => dragLeaveHandler(e)}
				onDragOver={(e) => e.preventDefault()}
				onDrop={(e) => dropHandler(e)}
			>
				{favoriteList.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
				{isOver && <UserCard user={draggableUser} preview={true} />}
			</div>
		</div>
	);
}
