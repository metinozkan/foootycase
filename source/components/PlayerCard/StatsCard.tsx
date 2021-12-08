import { Grid, Col, Text } from '@mantine/core';
import e from 'cors';
import React from 'react';
import { Stats } from '../../types/types';

interface StatsCardProps {
	stats: Stats;
}

const StatsRow = ({ title, value, color }: { title: string; value: number; color?: string }) => {
	return (
		<Grid className="rowFlexSpaceBetween">
			<Text color={color ? color : 'gray'}>{title}</Text>
			<Text weight={700}>{value}</Text>
		</Grid>
	);
};

const StatsCard = ({ stats }: StatsCardProps) => {
	const tempArr = [1, 2, 3, 4, 5];
	return (
		<Grid style={{ width: '100%' }} gutter={80}>
			<Col span={4}></Col>
			<Col span={4}>
				<StatsRow title="Goals" value={stats.goals} />
				<StatsRow title="Assist" value={stats.assists} />
				<StatsRow title="Shots" value={stats.shots} />{' '}
				<StatsRow title="Passes" value={stats.passes} />{' '}
				<StatsRow title="Crosses" value={stats.crosses} />
			</Col>
			<Col span={4}>
				<StatsRow title="Key passes" value={stats.keyPasses} />
				<StatsRow title="Smart Passes" value={stats.smartPasses} />
				<StatsRow title="Touch in Box" value={stats.touchInBox} />
				<StatsRow title="Yellow Cards" color="red" value={stats.yellowCards} />
				<StatsRow title="Red Cards" color="yellow" value={stats.redCards} />
			</Col>
		</Grid>
	);
};

export default StatsCard;
