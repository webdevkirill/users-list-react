import { LOAD_DATA, LOAD_ERROR } from './types';

export const loadData = (data) => ({
	type: LOAD_DATA,
	payload: data,
});

export const loadError = (e) => ({
	type: LOAD_ERROR,
	payload: e,
});
