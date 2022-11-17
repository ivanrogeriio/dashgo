import { Stack } from '@chakra-ui/react';
import {
	RiDashboardLine,
	RiContactsLine,
	RiInputMethodLine,
	RiGitMergeLine,
	RiUserLine,
} from 'react-icons/ri';
import NavLink from '../NavLink/NavLink';
import NavSection from '../NavSection/NavSection';

export default function SidebarNav() {
	return (
		<Stack spacing={'12'} align={'center'}>
			<NavSection tittle='GERAL'>
				<NavLink icon={RiDashboardLine} href={'/dashboard'}>
					Dashboard
				</NavLink>
				<NavLink icon={RiContactsLine} href={'/users'}>
					Usuários
				</NavLink>
				<NavLink icon={RiUserLine} href={'/users/create'}>
					Criar usuários
				</NavLink>
			</NavSection>
			<NavSection tittle='AUTOMAÇÃO'>
				<NavLink icon={RiInputMethodLine} href={'/forms'}>
					Formulários
				</NavLink>
				<NavLink icon={RiGitMergeLine} href={'/automation'}>
					Automação
				</NavLink>
			</NavSection>
		</Stack>
	);
}
