import { Grid, Col, Text } from '@mantine/core';
import e from 'cors';
import React from 'react';

const StatsCard = () => {
	const tempArr = [1, 2, 3, 4, 5];
	return (
		<Grid style={{ width: '100%' }} gutter={80}>
			<Col span={4}></Col>
			<Col span={4}>
				{tempArr.map((item) => {
					return (
						<Grid className="rowFlexSpaceBetween">
							<Text color="gray">Gray text</Text>
							<Text weight={700}>Bold</Text>
						</Grid>
					);
				})}
			</Col>
			<Col span={4}>
				{tempArr.map((item) => {
					return (
						<Grid className="rowFlexSpaceBetween">
							<Text color="gray">Gray text</Text>
							<Text weight={700}>Bold</Text>
						</Grid>
					);
				})}
			</Col>
		</Grid>
	);
};

export default StatsCard;
