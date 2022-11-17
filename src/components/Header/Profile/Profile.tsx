import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export default function Profile() {
	return (
		<Flex align={'center'}>
			<Box mr={'4'} textAlign={'right'}>
				<Text>Ivan Rogério</Text>
				<Text color={'gray.300'} fontSize={'sm'}>
					ivan.filho@icloud.com
				</Text>
			</Box>

			<Avatar
				size={'md'}
				name={'Ivan Rogério'}
				src={'https://github.com/ivanrogeriio.png'}
			/>
		</Flex>
	);
}
