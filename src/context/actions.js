import { LOAD_DATA } from './types';

export const loadData = (data) => ({
	type: LOAD_DATA,
	payload: data,
});
