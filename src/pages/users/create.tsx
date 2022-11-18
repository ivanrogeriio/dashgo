import {
	Flex,
	Box,
	Heading,
	Divider,
	VStack,
	SimpleGrid,
	HStack,
	Button,
} from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

type CreateUserFormData = {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
};

const createUserFormData = yup.object().shape({
	name: yup.string().required('Nome obrigatório'),
	email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
	password: yup
		.string()
		.required('Senha obrigatória')
		.min(6, 'No mínimo 6 caracteres'),
	password_confirmation: yup
		.string()
		.oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});

export default function CreateUser() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(createUserFormData),
	});

	const { errors } = formState;

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async (value) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));
	};

	return (
		<Box>
			<Header />

			<Flex w={'100%'} my={'6'} maxW={1480} mx={'auto'} px={'6'}>
				{/* SIDEBAR */}
				<Sidebar />

				<Box
					as={'form'}
					flex={'1'}
					borderRadius={8}
					bg={'gray.800'}
					p={['6', '8']}
					onSubmit={handleSubmit(handleCreateUser)}
				>
					<Heading size={'lg'} fontWeight={'normal'}>
						Criar usuário
					</Heading>

					<Divider my={['6', '8']} borderColor={'gray.700'} />

					<VStack spacing={['6', '8']}>
						<SimpleGrid minChildWidth={'240px'} spacing={['6', '8']} w={'100%'}>
							<Input label={'Nome'} error={errors.name} {...register('name')} />
							<Input
								type={'email'}
								label={'E-mail'}
								error={errors.email}
								{...register('email')}
							/>
						</SimpleGrid>

						<SimpleGrid minChildWidth={'240px'} spacing={['6', '8']} w={'100%'}>
							<Input
								type={'password'}
								label={'Senha'}
								error={errors.password}
								{...register('password')}
							/>
							<Input
								type={'password'}
								label={'Confirmação da senha'}
								error={errors.password_confirmation}
								{...register('password_confirmation')}
							/>
						</SimpleGrid>
					</VStack>

					<Flex mt={'8'} justify={'flex-end'}>
						<HStack spacing={'4'}>
							<Button colorScheme={'whiteAlpha'}>Cancelar</Button>
							<Button
								type={'submit'}
								colorScheme={'pink'}
								isLoading={formState.isSubmitting}
							>
								Salvar
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
