import React, { useState } from 'react';
import { Grid, Image, Title, Col, Button, createStyles, Collapse } from '@mantine/core';
import CustomColComponent from './CustomColComponent';
import StatsCard from './StatsCard';

const useStyles = createStyles((theme) => ({
	hiddenMd: {
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			// Type safe child reference in nested selectors via ref
			display: 'none',
		},
	},
}));

const PlayerCard = () => {
	const { classes } = useStyles();
	const [opened, setOpen] = useState(false);

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
						src="https://picsum.photos/200/300"
						style={{
							border: '1px solid aqua',
							borderRadius: 25,
							height: 52,
							width: 52,
						}}
					/>
				</Col>
				<Col span={3}>
					<Title order={5}>Metin</Title>
					<Title order={5}>özkan</Title>
				</Col>
				<Col span={2} className={classes.hiddenMd}>
					<Title order={5}>Countries</Title>
				</Col>
				<Col span={2}>
					<Title order={5}>Age</Title>
				</Col>
				<Col span={2} className={classes.hiddenMd}>
					<Title order={5}>Foot</Title>
				</Col>

				{/* <Col span={1}>
				<Title order={5}>Burası biraz şov</Title>
			</Col> */}
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
