import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Stack,
} from '@chakra-ui/react';

export default function Home() {
	return (
		<Flex h={'100vh'} w={'100%'} align={'center'} justify={'center'}>
			<Flex
				as={'form'}
				w={'100%'}
				maxW={360}
				p={'8'}
				flexDir={'column'}
				bg={'gray.800'}
				borderRadius={8}
			>
				<Stack spacing={'4'}>
					<FormControl>
						<FormLabel htmlFor={'email'}>E-mail</FormLabel>

						<Input
							name={'email'}
							// placeholder={'E-mail'}
							type={'email'}
							focusBorderColor={'pink.500'}
							bgColor={'gray.900'}
							variant={'filled'}
							_hover={{
								bgColor: 'gray.900',
							}}
							size={'lg'}
						/>
					</FormControl>

					<FormControl>
						<FormLabel htmlFor={'password'}>Senha</FormLabel>
						<Input
							name={'password'}
							// placeholder={'Senha'}
							type={'password'}
							focusBorderColor={'pink.500'}
							bgColor={'gray.900'}
							variant={'filled'}
							_hover={{
								bgColor: 'gray.900',
							}}
							size={'lg'}
						/>
					</FormControl>
				</Stack>

				<Button type={'submit'} mt={'6'} colorScheme={'pink'} size={'lg'}>
					Entrar
				</Button>
			</Flex>
		</Flex>
	);
}
