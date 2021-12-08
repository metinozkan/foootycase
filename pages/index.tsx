import React from 'react';
import { useRouter } from 'next/router';

import { Center, Grid, SimpleGrid, Title, LoadingOverlay, Loader, Button } from '@mantine/core';
import type { NextPage } from 'next';
import PlayerCard from '../source/components/PlayerCard/PlayerCard';
import TeamCard from '../source/components/TeamCard';
import superagent from 'superagent';
import { PlayerDetail, TeamDetail } from '../source/types/types';
import LoaderContainer from '../source/components/LoaderContainer';
import { BrowserStorage } from '../source/BrowserStorage';

import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
	return {
		container: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			padding: 8,
			width: '100%',
			paddingRight: 40,
			paddingLeft: 40,
		},

		wrapper: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			padding: 8,
			marginTop: 8,

			width: '100%',
		},

		teamsWrapper: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: 8,
			marginTop: 8,
			width: '100%',
		},

		playersWrapper: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			padding: 8,
			marginTop: 8,
			width: '100%',
		},
	};
});

const Home: NextPage = () => {
	const router = useRouter();
	const { classes } = useStyles();

	const [selectedTeam, setSelectedTeam] = React.useState<number>();
	const [loading, setLoading] = React.useState(true);
	const [loadingPlayers, setLoadingPlayers] = React.useState(true);

	const [teams, setTeamms] = React.useState<TeamDetail[]>();
	const [players, setPlayers] = React.useState<PlayerDetail[]>();

	const getTeams = () => {
		superagent
			.get('https://mock-foooty-api.herokuapp.com/teams')
			.set('Accept', 'application/json')
			.end((error, response) => {
				setTeamms(response.body.teams);
				setSelectedTeam(response.body.teams[0].id);
				setLoading(false);
			});
	};

	const getSelectedTeamPlayers = () => {
		superagent
			.get(` https://mock-foooty-api.herokuapp.com/teams/${selectedTeam}/players`)
			.set('Accept', 'application/json')
			.end((error, response) => {
				setPlayers(response.body.players);
				setLoadingPlayers(false);
			});
	};

	React.useEffect(() => {
		if (selectedTeam) {
			setLoadingPlayers(true);
			getSelectedTeamPlayers();
		}
	}, [selectedTeam]);

	React.useEffect(() => {
		getTeams();
	}, []);
	return loading ? (
		<LoadingOverlay visible={loading} />
	) : (
		<Center className={classes.container}>
			<Grid className={classes.wrapper}>
				<Grid className={classes.teamsWrapper}>
					<Title order={1}>Teams</Title>
					<Button
						onClick={() => {
							router.push('comparison');
						}}
					>
						Go Favorite
					</Button>
				</Grid>
				<Grid>
					{teams &&
						teams.map((team: TeamDetail, index) => {
							return (
								<TeamCard
									key={index}
									teamDetail={team}
									setSelectedTeam={setSelectedTeam}
									selectedTeam={selectedTeam}
								/>
							);
						})}
				</Grid>
			</Grid>
			<Grid className={classes.wrapper}>
				<Title order={1}>Players</Title>

				<Grid className={classes.playersWrapper}>
					{loadingPlayers ? (
						<LoaderContainer />
					) : (
						players &&
						players.map((player: PlayerDetail, index) => {
							return <PlayerCard key={index} playerDetail={player} />;
						})
					)}
				</Grid>
			</Grid>
		</Center>
	);
};

export default Home;
