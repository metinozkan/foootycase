import { Col, createStyles } from '@mantine/core';
import React from 'react';

type CustomColComponentType = {
	span: number;
	children: React.ReactNode;
	hiddenSmallerThan?: 'sm' | 'md' | 'lg';
};

type CustomStleType = {
	hiddenSmallerThan?: 'sm' | 'md' | 'lg';
};

const useStyles = createStyles((theme, { hiddenSmallerThan }: CustomStleType) => ({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',

		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			// Type safe child reference in nested selectors via ref
			display: 'none',
		},
	},
}));

const CustomColComponent: React.FunctionComponent<CustomColComponentType> = ({
	span,
	children,
	hiddenSmallerThan,
}: CustomColComponentType) => {
	const { classes } = useStyles({ hiddenSmallerThan });

	return (
		<Col span={span} className={classes.container}>
			{children}
		</Col>
	);
};

export default CustomColComponent;
