import React, { useContext } from 'react';
import { useFetch } from '../../hooks/useFetch';
import Loader from '../Loader/Loader';
import { ContextApp } from '../../context/reducer';

export default function UsersList() {
	const { isLoading } = useFetch('https://randomuser.me/api/?results=10');
	const { state, dispatch } = useContext(ContextApp);

	if (isLoading) {
		return <Loader />;
	}

	if (state.loadError) {
		return <p>Что-то пошло не так. Обновите страницу позже</p>;
	}

	return <div>Hi</div>;
}
