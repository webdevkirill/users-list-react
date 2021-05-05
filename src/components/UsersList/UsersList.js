import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import Loader from '../Loader/Loader';

export default function UsersList() {
	const { isLoading } = useFetch('https://randomuser.me/api/?results=10');

	if (isLoading) {
		return <Loader />;
	}

	return <div>Hi</div>;
}
