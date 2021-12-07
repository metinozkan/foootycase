import React from 'react';
import { useRouter } from 'next/router';

import { Center, Grid, SimpleGrid, Title, Text, Button } from '@mantine/core';

const Comparison = () => {
	const router = useRouter();

	return (
		<Center
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
				padding: 8,
				width: '100%',
				paddingRight: 40,
				paddingLeft: 40,
			}}
		>
			<Grid
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
					alignItems: 'flex-start',
					padding: 8,
					marginTop: 8,
					width: '100%',
				}}
			>
				<Grid
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						padding: 8,
						marginTop: 8,
						width: '100%',
					}}
				>
					<Title order={1}>Comparison</Title>
					<Button
						onClick={() => {
							router.push('/');
						}}
					>
						Go Home
					</Button>
				</Grid>
			</Grid>
		</Center>
	);
};

export default Comparison;
