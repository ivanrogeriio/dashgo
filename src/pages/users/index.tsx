import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilFill, RiPencilLine } from 'react-icons/ri';
import Header from '../../components/Header/Header';
import Pagination from '../../components/Pagination/Pagination';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function UserList() {
	return (
		<Box>
			<Header />

			<Flex w={'100%'} my={'6'} maxW={1480} mx={'auto'} px={'6'}>
				{/* SIDEBAR */}
				<Sidebar />

				<Box flex={'1'} borderRadius={8} bg={'gray.800'} p={'8'}>
					<Flex mb={'8'} justify={'space-between'} align={'center'}>
						<Heading size={'lg'} fontWeight={'normal'}>
							Listagem de usuários
						</Heading>

						<Button
							as={'a'}
							size={'sm'}
							fontSize={'sm'}
							colorScheme={'pink'}
							leftIcon={<Icon as={RiAddLine} fontSize={'18'} />}
						>
							Criar novo
						</Button>
					</Flex>

					<Table colorScheme={'whiteAlpha'}>
						<Thead>
							<Tr>
								<Th px={'6'} color={'gray.500'} w={'8'}>
									<Checkbox colorScheme={'pink'} />
								</Th>
								<Th>Usuário</Th>
								<Th>Data de cadastro</Th>
								<Th w={'8'}></Th>
							</Tr>
						</Thead>

						<Tbody>
							<Tr>
								<Td px={'6'}>
									<Checkbox colorScheme={'pink'} />
								</Td>
								<Td>
									<Box>
										<Text fontWeight={'bold'}>Ivan Rogério</Text>
										<Text fontSize={'sm'} color={'gray.300'}>
											ivanfilho22@icloud.com
										</Text>
									</Box>
								</Td>
								<Td>04 de Abril, 2022</Td>
								<Td>
									{' '}
									<Button
										as={'a'}
										size={'sm'}
										fontSize={'sm'}
										colorScheme={'purple'}
										leftIcon={<Icon as={RiPencilLine} fontSize={'18'} />}
									>
										Editar
									</Button>
								</Td>
							</Tr>
						</Tbody>
					</Table>

					<Pagination />
				</Box>
			</Flex>
		</Box>
	);
}
