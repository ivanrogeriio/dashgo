import {
	FormControl,
	FormLabel,
	Input as ChakraInput,
	InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
	name: string;
	label?: string;
}

export default function Input({ name, label, ...rest }: InputProps) {
	return (
		<FormControl>
			{!!label && <FormLabel htmlFor={'email'}>E-mail</FormLabel>}

			<ChakraInput
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
				{...rest}
			/>
		</FormControl>
	);
}
