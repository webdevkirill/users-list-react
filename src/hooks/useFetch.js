import { useContext, useState, useCallback, useEffect } from 'react';
import { ContextApp } from '../context/reducer';
import { loadData } from '../context/actions';

const transformUsersToGroups = (users) =>
	users.reduce((acc, user) => {
		const key = Math.trunc((user.registered.age - 1) / 10);
		if (!acc[key]) {
			acc[key] = [];
		}
		acc[key].push({
			id: user.id.value,
			name: `${user.name.first} ${user.id.last}`,
			email: user.email,
			registered: user.registered,
		});
		return acc;
	}, {});

export const useFetch = (url) => {
	const [isLoading, setIsLoading] = useState(true);
	const { dispatch } = useContext(ContextApp);

	const fetchData = useCallback(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				const users = transformUsersToGroups(data.results);
				console.log(users);
				dispatch(loadData(users));
				setIsLoading(false);
			});
	}, [url, dispatch]);

	useEffect(fetchData, [fetchData]);

	return { isLoading };
};
