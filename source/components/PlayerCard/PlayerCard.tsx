import React, { useState } from 'react';
import { Grid, Image, Title, Col, Button, createStyles, Collapse } from '@mantine/core';
import CustomColComponent from './CustomColComponent';
import StatsCard from './StatsCard';
import { PlayerDetail } from '../../types/types';

const useStyles = createStyles((theme) => ({
	hiddenMd: {
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			// Type safe child reference in nested selectors via ref
			display: 'none',
		},
	},
}));

interface PlayerCardProps {
	playerDetail: PlayerDetail;
}

const PlayerCard = ({ playerDetail }: PlayerCardProps) => {
	const { classes } = useStyles();
	const [opened, setOpen] = useState(false);

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
				onClick={() => setOpen(!opened)}
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
					<Button>Fav</Button>
				</Col>
			</Grid>

			<Grid className={'rowFlexCenter'}>
				<Collapse in={opened} style={{ width: '80%', padding: 8 }}>
					<StatsCard />
				</Collapse>
			</Grid>
		</>
	);
};

export default PlayerCard;
