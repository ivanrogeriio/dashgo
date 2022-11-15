import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});

const options: ApexCharts.ApexOptions = {
	chart: {
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
		foreColor: theme.colors.gray[500],
	},
	grid: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	tooltip: {
		enabled: false,
	},
	xaxis: {
		type: 'datetime',
		axisBorder: {
			color: theme.colors.gray[600],
		},
		categories: [
			'2021-03-18T00:00:00.000z',
			'2021-03-19T00:00:00.000z',
			'2021-03-20T00:00:00.000z',
			'2021-03-21T00:00:00.000z',
			'2021-03-22T00:00:00.000z',
			'2021-03-23T00:00:00.000z',
			'2021-03-24T00:00:00.000z',
		],
	},
	fill: {
		opacity: 0.3,
		type: 'gradient',
		gradient: {
			shade: 'dark',
			opacityFrom: 0.7,
			opacityTo: 0.3,
		},
	},
};

const series = [
	{
		name: 'series1',
		data: [31, 120, 10, 28, 51, 18, 109],
	},
];

export default function dashboard() {
	return (
		<>
			{/* HEADER */}
			<Header />

			<Flex w={'100%'} my={'6'} maxW={1480} mx={'auto'} px={'6'}>
				{/* SIDEBAR */}
				<Sidebar />

				<SimpleGrid
					flex={'1'}
					gap={'4'}
					minChildWidth={'320px'}
					alignItems={'flex-start'}
				>
					<Box p={'8'} bg={'gray.800'} borderRadius={'8'} pb={'4'}>
						<Text fontSize={'lg'} mb={'4'}>
							Inscritos da Semana
						</Text>
						<Chart type='area' height={160} options={options} series={series} />
					</Box>

					<Box p={'8'} bg={'gray.800'} borderRadius={'8'} pb={'4'}>
						<Text fontSize={'lg'} mb={'4'}>
							Taxa de Abertura
						</Text>
						<Chart type='area' height={160} options={options} series={series} />
					</Box>
				</SimpleGrid>
			</Flex>
		</>
	);
}
