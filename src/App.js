import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer, ContextApp } from './reducer';

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<ContextApp.Provider value={{ dispatch, state }}>
			Hi
		</ContextApp.Provider>
	);
}

export default App;
