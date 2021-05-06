import React, { useContext } from 'react';
import { useStyles } from './useStyles';
import { appendDraggableItem } from '../../../context/actions';
import { ContextApp } from '../../../context/reducer';
import UserCard from '../../UserCard/UserCard';

export default function FavoriteUsersList() {
	const classes = useStyles();
	const {
		state: { favoriteList },
		dispatch,
	} = useContext(ContextApp);

	const dragOverHandler = (e) => {
		e.preventDefault();
	};

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
				className={classes.dropzone}
				onDragOver={(e) => dragOverHandler(e)}
				onDrop={(e) => dropHandler(e)}
			>
				{favoriteList.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</div>
		</div>
	);
}
