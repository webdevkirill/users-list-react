import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	icon: {
		cursor: 'pointer',
		width: 24,
		height: 24,
	},
}));

export default function TrashIcon({ onClickHandler }) {
	const classes = useStyles();
	return (
		<SvgIcon
			viewBox='-40 0 427 427'
			onClick={onClickHandler}
			className={classes.icon}
		>
			<path d='M232.4 154.7a10 10 0 00-10 10v189a10 10 0 0020 0v-189a10 10 0 00-10-10zm0 0M114.4 154.7a10 10 0 00-10 10v189a10 10 0 0020 0v-189a10 10 0 00-10-10zm0 0' />
			<path d='M28.4 127.1v246.4c0 14.6 5.3 28.2 14.7 38A49.2 49.2 0 0078.8 427H268c13.5 0 26.4-5.6 35.7-15.4a55.2 55.2 0 0014.7-38.1V127.1a38.2 38.2 0 00-9.8-75.1h-51.2V39.5A39.3 39.3 0 00217.8 0H129a39.3 39.3 0 00-39.6 39.5V52H38.2a38.2 38.2 0 00-9.8 75.1zM268 407H78.8c-17.1 0-30.4-14.7-30.4-33.5V128h250v245.5c0 18.8-13.3 33.5-30.4 33.5zM109.4 39.5A19.3 19.3 0 01129 20h88.8a19.3 19.3 0 0119.6 19.5V52h-128zM38.2 72h270.4a18 18 0 110 36H38.2a18 18 0 110-36zm0 0' />
			<path d='M173.4 154.7a10 10 0 00-10 10v189a10 10 0 0020 0v-189a10 10 0 00-10-10zm0 0' />
		</SvgIcon>
	);
}
