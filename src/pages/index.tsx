import { Button, Flex, Stack } from '@chakra-ui/react';
import Input from '../components/Form/Input';

export default function SignIn() {
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
					<Input label={'E-mail'} name={'email'} type={'email'} />
					<Input label={'Senha'} name={'password'} type={'password'} />
				</Stack>

				<Button type={'submit'} mt={'6'} colorScheme={'pink'} size={'lg'}>
					Entrar
				</Button>
			</Flex>
		</Flex>
	);
}
