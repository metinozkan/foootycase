import { Center, Grid, SimpleGrid, Title } from '@mantine/core';
import type { NextPage } from 'next';
import PlayerCard from '../source/components/PlayerCard/PlayerCard';
import TeamCard from '../source/components/TeamCard';

const Home: NextPage = () => {
	const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
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
				}}
			>
				<Title order={1}>Teams</Title>
				<Grid>
					{tempArr.map((item) => {
						return <TeamCard />;
					})}
				</Grid>
			</Grid>
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
				<Title order={1}>Players</Title>

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
					{tempArr.map((item) => {
						return <PlayerCard />;
					})}
				</Grid>
			</Grid>
		</Center>
	);
};

export default Home;
