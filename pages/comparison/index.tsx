import React from 'react';
import { connect } from 'react-redux';
import superagent from 'superagent';

import { useRouter } from 'next/router';

import { Center, Grid, SimpleGrid, Title, Text, Button, Image, Popover } from '@mantine/core';
import { BrowserStorage } from '../../source/BrowserStorage';
import { AiOutlinePlus } from 'react-icons/ai';

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

		containerTop: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: 8,
			marginTop: 8,
			width: '100%',
		},

		tableContainer: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'flex-end',
			padding: 8,
			marginTop: 8,
			position: 'relative',
		},

		tableLeftHeaders: {
			display: 'flex',
			flexDirection: 'column',
			padding: 8,
			marginTop: 8,
			marginRight: 24,
		},

		tableRowWrapper: {
			display: 'flex',
			flexDirection: 'column',
			padding: 8,
			marginTop: 8,
			marginRight: 20,
		},
	};
});

const Comparison = () => {
	const router = useRouter();
	const { classes } = useStyles();

	const [popoverOpen, setPopoverOpen] = React.useState<boolean>(false);
	const comparisonPlayerObjectsFromStorage: any[] | null =
		BrowserStorage.getItem('comparisonPlayers');

	const [selectedFavoritePlayer, setSelectedFavoritePlayer] = React.useState<any[]>([]);

	const AddFavoriteComponent = () => {
		return (
			<Popover
				style={
					selectedFavoritePlayer.length == 0
						? {
								position: 'absolute',
								top: 0,
								right: -20,
						  }
						: {}
				}
				opened={popoverOpen}
				onClose={() => setPopoverOpen(false)}
				target={
					<div
						style={{
							height: 50,
							width: 50,
							background: 'gray',
							borderRadius: 25,
							cursor: 'pointer',
						}}
						className="rowFlexCenter"
						onClick={() => {
							setPopoverOpen((o) => !o);
						}}
					>
						<AiOutlinePlus size={40} />
					</div>
				}
				styles={{ body: { width: 260 } }}
				position="bottom"
				withArrow
			>
				<div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
					{comparisonPlayerObjectsFromStorage &&
						comparisonPlayerObjectsFromStorage.map((item) => {
							return (
								<Grid
									style={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
									}}
									onClick={() => {
										setSelectedFavoritePlayer([
											...selectedFavoritePlayer,
											item,
										]);
									}}
								>
									<div
										style={{
											width: '100%',
											margin: 8,
										}}
										className="hoverClass"
									>
										{item.firstName}
									</div>
								</Grid>
							);
						})}
				</div>
			</Popover>
		);
	};

	return (
		<Center className={classes.container}>
			<Grid className={classes.containerTop}>
				<Title order={1}>Comparison</Title>
				<Button
					onClick={() => {
						router.push('/');
					}}
				>
					Go Home
				</Button>
			</Grid>

			<Grid className={classes.tableContainer}>
				<Grid className={classes.tableLeftHeaders}>
					<Text color="gray">Index</Text>
					<Text color="gray">Goals</Text>
					<Text color="gray">Asists</Text>
					<Text color="gray">Shots</Text>
					<Text color="gray">Passes</Text>
					<Text color="gray">Crosses</Text>
					<Text color="gray">Key passes</Text>
					<Text color="gray">Smart Passes</Text>
					<Text color="gray">Touch in Box</Text>
					<Text color="yellow">Yellow Card</Text>
					<Text color="red">Red Card</Text>
				</Grid>

				{selectedFavoritePlayer.length > 0 ? (
					selectedFavoritePlayer.map((player, index) => {
						return (
							<Grid className={classes.tableRowWrapper}>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'center',
									}}
								>
									<Image
										width={50}
										height={50}
										radius={25}
										src={player.image}
										style={{
											marginRight:
												index == selectedFavoritePlayer.length - 1
													? 16
													: '',
										}}
									/>
									{index == selectedFavoritePlayer.length - 1 && (
										<AddFavoriteComponent />
									)}
								</div>
								<div>{player.firstName}</div>
								<Text color="black">{player.stats.index}</Text>
								<Text color="black">{player.stats.goals}</Text>
								<Text color="black">{player.stats.assists}</Text>
								<Text color="black">{player.stats.shots}</Text>
								<Text color="black">{player.stats.passes}</Text>
								<Text color="black">{player.stats.crosses}</Text>
								<Text color="black">{player.stats.keyPasses}</Text>
								<Text color="black">{player.stats.smartPasses}</Text>
								<Text color="black">{player.stats.touchInBox}</Text>
								<Text color="black">{player.stats.yellowCards}</Text>
								<Text color="black">{player.stats.redCards}</Text>
							</Grid>
						);
					})
				) : (
					<AddFavoriteComponent />
				)}
			</Grid>
		</Center>
	);
};

const mapStateToProps = (state: any) => ({
	Favorites: state.Favorite.favorites,
});

export default connect(mapStateToProps)(Comparison);
