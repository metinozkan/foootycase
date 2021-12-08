import React, { useState } from 'react';
import superagent from 'superagent';

import { Grid, Image, Title, Col, Button, createStyles, Collapse, ActionIcon } from '@mantine/core';
import StatsCard from './StatsCard';
import { PlayerDetail, Stats } from '../../types/types';
import LoaderContainer from '../LoaderContainer';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { connect } from 'react-redux';
import { FavoriteAction } from '../../data/actions/FavoriteAction';
import { BrowserStorage } from '../../BrowserStorage';

const useStyles = createStyles((theme) => ({
	hiddenMd: {
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			// Type safe child reference in nested selectors via ref
			display: 'none',
		},

		image: {},
	},
}));

interface PlayerCardProps {
	playerDetail: PlayerDetail;
	Favorites: number[];
}

const PlayerCard = ({ playerDetail, Favorites }: PlayerCardProps) => {
	const { classes } = useStyles();
	const [opened, setOpen] = useState(false);
	const [stats, setStats] = useState<Stats>();
	const [loading, setLoading] = useState(false);

	const imageColor =
		playerDetail.role.code3 == 'DEF'
			? 'green'
			: playerDetail.role.code3 == 'MID'
			? 'blue'
			: 'red';

	const age = playerDetail.birthDate ? 2021 - Number(playerDetail.birthDate.split('-')[0]) : '-';

	const birthCountryName = playerDetail.birthArea.name ? `${playerDetail.birthArea.name}, ` : '';
	const passportCountryName = playerDetail.passportArea.name
		? `${playerDetail.passportArea.name}`
		: '';
	const noInformationForCountry = birthCountryName == '' && passportCountryName == '';

	const getStats = async (playerId: number) => {
		return superagent
			.get(`https://mock-foooty-api.herokuapp.com/players/${playerId}/stats`)
			.set('Accept', 'application/json')
			.then((response) => {
				// if (error) {
				// 	setLoading(false);
				// 	return;
				// }
				setStats(response.body.stats);
				setLoading(false);

				return response.body.stats;
			})
			.catch((err) => {
				setLoading(false);
			});
	};

	const openStatsArea = (playerId: number) => {
		if (!opened) {
			setLoading(true);
			setOpen(true);
			getStats(playerId);
		} else {
			setOpen(false);
		}
	};

	const createComparisonPlayerObject = async () => {
		var stats = await getStats(playerDetail.id);
		const object = {
			id: playerDetail.id,
			image: playerDetail.image,
			firstName: playerDetail.firstName,
			lastName: playerDetail.lastName,
			stats: stats,
		};

		const localStorageComparisonPlayers: any[] | null =
			BrowserStorage.getItem('comparisonPlayers');

		if (localStorageComparisonPlayers) {
			BrowserStorage.setItem('comparisonPlayers', [...localStorageComparisonPlayers, object]);
		} else {
			BrowserStorage.setItem('comparisonPlayers', [object]);
		}
	};

	const deleteComparisonPlayerObjectFromStorage = () => {
		const localStorageComparisonPlayers: any[] | null =
			BrowserStorage.getItem('comparisonPlayers');

		if (localStorageComparisonPlayers) {
			BrowserStorage.setItem('comparisonPlayers', [
				...localStorageComparisonPlayers.filter((item) => item.id != playerDetail.id),
			]);
		} else {
		}
	};

	React.useEffect(() => {
		const localStorageComparisonPlayers: any[] | null =
			BrowserStorage.getItem('comparisonPlayers');

		if (localStorageComparisonPlayers) {
			localStorageComparisonPlayers.map((item) => FavoriteAction.addFavorite(item.id));
		} else {
		}
	}, []);
	return (
		<>
			<Grid
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					margin: 12,
					width: '100%',
					cursor: 'pointer',
				}}
				className="playerCardContainer"
				onClick={() => openStatsArea(playerDetail.id)}
			>
				<Col span={1}>
					<Image
						width={50}
						height={50}
						radius={25}
						src={playerDetail.image}
						style={{
							border: `2px solid ${imageColor}`,
							borderRadius: 30,
							height: 60,
							width: 60,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'flex-end',
						}}
					/>
				</Col>
				<Col span={3}>
					<Title order={5}>{playerDetail.firstName}</Title>
					<Title order={5}>{playerDetail.lastName}</Title>
				</Col>
				<Col span={2} className={classes.hiddenMd}>
					<Title order={5}>
						{noInformationForCountry
							? 'No information'
							: `${birthCountryName} ${passportCountryName} `}
					</Title>
				</Col>
				<Col span={2}>
					<Title order={5}>{age}</Title>
				</Col>
				<Col span={2} className={classes.hiddenMd}>
					<Title order={5}>
						{playerDetail.foot ? playerDetail.foot : 'No information'}
					</Title>
				</Col>

				<Col span={2}>
					<ActionIcon
						onClick={async (e: React.MouseEvent) => {
							e.stopPropagation();
							if (Favorites.indexOf(playerDetail.id) == -1) {
								FavoriteAction.addFavorite(playerDetail.id);
								createComparisonPlayerObject();
							} else {
								FavoriteAction.deleteFavorite(playerDetail.id);
								deleteComparisonPlayerObjectFromStorage();
							}
						}}
					>
						{Favorites.indexOf(playerDetail.id) == -1 ? (
							<AiOutlineHeart size={35} />
						) : (
							<AiFillHeart size={35} color="red" />
						)}
					</ActionIcon>
				</Col>
			</Grid>

			<Grid className={'rowFlexCenter'}>
				<Collapse in={opened} style={{ width: '80%', padding: 8 }}>
					{!loading ? (
						stats ? (
							<StatsCard stats={stats} />
						) : (
							<div className="rowFlexCenter"> No information</div>
						)
					) : (
						<LoaderContainer />
					)}
				</Collapse>
			</Grid>
		</>
	);
};

const mapStateToProps = (state: any) => ({
	Favorites: state.Favorite.favorites,
});

export default connect(mapStateToProps)(PlayerCard);
