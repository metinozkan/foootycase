import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import '../styles/index.scss';

export default function App(props: AppProps) {
	const { Component, pageProps } = props;

	return (
		<>
			<Head>
				<title>Page title</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					/** Put your mantine theme override here */
					colorScheme: 'light',
					breakpoints: {
						xs: 500,
						sm: 800,
						md: 1000,
						lg: 1200,
						xl: 1400,
					},
				}}
			>
				<Component {...pageProps} />
			</MantineProvider>
		</>
	);
}
