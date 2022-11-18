import { Button, Flex, Stack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input';

type SignInFormData = {
	email: string;
	password: string;
};

const signInFormSchema = yup.object().shape({
	email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
	password: yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(signInFormSchema),
	});

	const { errors } = formState;

	const handleSignIn: SubmitHandler<SignInFormData> = async (value) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));
	};

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
				onSubmit={handleSubmit(handleSignIn)}
			>
				<Stack spacing={'4'}>
					<Input
						label={'E-mail'}
						type={'email'}
						error={errors.email}
						{...register('email')}
					/>
					<Input
						label={'Senha'}
						type={'password'}
						error={errors.password}
						{...register('password')}
					/>
				</Stack>

				<Button
					type={'submit'}
					mt={'6'}
					colorScheme={'pink'}
					size={'lg'}
					isLoading={formState.isSubmitting}
				>
					Entrar
				</Button>
			</Flex>
		</Flex>
	);
}
