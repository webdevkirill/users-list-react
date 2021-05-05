import React from 'react';
import { LOAD_DATA, LOAD_ERROR, CHANGE_USERS_DROPDOWN } from './types';
export const ContextApp = React.createContext();

export const initialState = {
	data: null,
	loadError: null,
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
	default: (state) => state,
};

export const reducer = (state, action) => {
	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
};
