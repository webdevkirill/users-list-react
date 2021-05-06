import React from 'react';
import {
	LOAD_DATA,
	LOAD_ERROR,
	CHANGE_USERS_DROPDOWN,
	DELETE_FAVORITE_USER,
	APPEND_DRAGGABLE_ITEM,
	SET_DRAGGABLE_ITEM,
} from './types';
export const ContextApp = React.createContext();

export const initialState = {
	data: null,
	loadError: null,
	favoriteList: [],
	changasFlag: false,
	draggableUser: null,
};

const handlers = {
	[LOAD_DATA]: (state, { payload }) => ({
		...state,
		data: payload,
		loadError: null,
	}),
	[LOAD_ERROR]: (state, { payload }) => ({
		...state,
		loadError: payload,
	}),
	[CHANGE_USERS_DROPDOWN]: (state, { payload }) => ({
		...state,
		data: {
			...state.data,
			[payload]: {
				...state.data[payload],
				isOpen: !state.data[payload].isOpen,
			},
		},
	}),
	[APPEND_DRAGGABLE_ITEM]: (state, { payload }) =>
		appendDraggableItemHandler({ ...state }, payload),
	[DELETE_FAVORITE_USER]: (state, { payload }) =>
		deleteFavoriteUserHandler({ ...state }, payload),
	[SET_DRAGGABLE_ITEM]: (state, { payload }) => ({
		...state,
		draggableUser: payload,
	}),
	default: (state) => state,
};

export const reducer = (state, action) => {
	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
};

const appendDraggableItemHandler = (state, { key, idx }) => {
	state.data[key].users[idx].isFavorite = true;
	state.favoriteList = [...state.favoriteList, state.data[key].users[idx]];
	state.changesFlag = !state.changesFlag;
	state.draggableUser = null;
	return state;
};

const deleteFavoriteUserHandler = (state, { key, idx }) => {
	state.data[key].users[idx].isFavorite = false;
	state.favoriteList = state.favoriteList.filter(
		(user) => !(user.keyInData === key && user.idx === idx)
	);
	state.changesFlag = !state.changesFlag;
	return state;
};
