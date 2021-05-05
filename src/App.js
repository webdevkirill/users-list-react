import React, { useReducer } from 'react';
import './App.css';
import UsersList from './components/UsersList/UsersList';
import { initialState, reducer, ContextApp } from './context/reducer';

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<ContextApp.Provider value={{ dispatch, state }}>
			<UsersList />
		</ContextApp.Provider>
	);
}

export default App;
