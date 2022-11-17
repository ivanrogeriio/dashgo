import { Flex, Input, Icon } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export default function Search() {
	return (
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
	);
}
