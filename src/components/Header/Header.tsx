import { Flex, Icon, Input, HStack, Text, Box, Avatar } from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine, RiUserLine } from 'react-icons/ri';

export default function Header() {
	return (
		<Flex
			as={'header'}
			h={'20'}
			w={'100%'}
			maxW={1480}
			mx={'auto'}
			my={'4'}
			px={'6'}
			align={'center'}
		>
			{/* LOGO */}
			<Text
				w={'64'}
				fontSize={'3xl'}
				fontWeight={'bold'}
				letterSpacing={'tight'}
			>
				dashgo
				<Text as={'span'} ml={'1'} color={'pink.500'}>
					.
				</Text>
			</Text>

			{/* SEARCH BOX */}
			<Flex
				as={'label'}
				maxW={400}
				flex={'1'}
				alignItems={'center'}
				alignSelf={'center'}
				px={'8'}
				py={'4'}
				ml={'6'}
				color={'gray.200'}
				bg={'gray.800'}
				borderRadius={'full'}
				pos={'relative'}
			>
				<Input
					color={'gray.50'}
					variant={'unstyled'}
					placeholder={'Buscar na plataforma'}
					_placeholder={{
						color: 'gray.400',
					}}
					px={'4'}
					mr={'4'}
				/>
				<Icon as={RiSearchLine} fontSize={'20'} />
			</Flex>

			<Flex align={'center'} mx={'auto'}>
				<HStack
					spacing={'8'}
					mx={'8'}
					pr={'8'}
					py={'1'}
					color={'gray.300'}
					borderRightWidth={1}
					borderColor={'gray.700'}
				>
					<Icon as={RiNotificationLine} fontSize={'20'} />
					<Icon as={RiUserLine} fontSize={'20'} />
				</HStack>

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
			</Flex>
		</Flex>
	);
}
