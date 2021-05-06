import {
	LOAD_DATA,
	LOAD_ERROR,
	CHANGE_USERS_DROPDOWN,
	APPEND_DRAGGABLE_ITEM,
	DELETE_FAVORITE_USER,
	SET_DRAGGABLE_ITEM,
} from './types';

export const loadData = (data) => ({
	type: LOAD_DATA,
	payload: data,
});

export const loadError = (e) => ({
	type: LOAD_ERROR,
	payload: e,
});

export const changeUsersDropdown = (id) => ({
	type: CHANGE_USERS_DROPDOWN,
	payload: id,
});

export const deleteFavoriteUser = (key, idx) => ({
	type: DELETE_FAVORITE_USER,
	payload: {
		key,
		idx,
	},
});

export const setDraggableItem = (user) => ({
	type: SET_DRAGGABLE_ITEM,
	payload: user,
});

export const appendDraggableItem = (key, idx) => ({
	type: APPEND_DRAGGABLE_ITEM,
	payload: {
		key,
		idx,
	},
});
