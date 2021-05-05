import React from 'react';
export const ContextApp = React.createContext();

export const initialState = {
	data: null,
};

const handlers = {
	default: (state) => state,
};

export const reducer = (state, action) => {
	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
};
