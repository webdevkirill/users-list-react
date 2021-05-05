import { LOAD_DATA, LOAD_ERROR, CHANGE_USERS_DROPDOWN } from './types';

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
