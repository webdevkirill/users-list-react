import React from 'react';
import { useFetch } from '../hooks/useFetch';

export default function UsersList() {
	const { isLoading } = useFetch('https://randomuser.me/api/?results=10');

	return <div>Hi</div>;
}
