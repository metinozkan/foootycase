import { Grid, Image, Title } from '@mantine/core';
import React from 'react';
import { TeamDetail } from '../types/types';

type TeamCardProps = {
	teamDetail: TeamDetail;
	setSelectedTeam: (id: number) => void;
	selectedTeam?: number;
};

const TeamCard = ({ teamDetail, setSelectedTeam, selectedTeam }: TeamCardProps) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				margin: 20,
				height: 120,
				width: 120,
				cursor: 'pointer',
			}}
			onClick={() => {
				setSelectedTeam(teamDetail.id);
			}}
		>
			<Image width={80} height={80} src={teamDetail.icon} style={{ height: 80, width: 80 }} />
			<div
				style={{
					fontWeight: 700,
					fontSize: '22px',
					lineHeight: 1.4,
					color: selectedTeam == teamDetail.id ? 'aqua' : 'black',
					textAlign: 'center',
				}}
			>
				{teamDetail.name}
			</div>
		</div>
	);
};

export default TeamCard;
