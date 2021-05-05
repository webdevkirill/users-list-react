import React from 'react';
import { LOAD_DATA } from './types';
export const ContextApp = React.createContext();

export const initialState = {
	data: null,
};

const handlers = {
	[LOAD_DATA]: (state, { payload }) => ({ ...state, data: payload }),
	default: (state) => state,
};

export const reducer = (state, action) => {
	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
};
