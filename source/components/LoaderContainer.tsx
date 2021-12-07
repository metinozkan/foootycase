import { Loader } from '@mantine/core';
import React from 'react';

const LoaderContainer = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100%',
			}}
		>
			<Loader />
		</div>
	);
};
export default LoaderContainer;
