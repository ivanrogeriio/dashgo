import { Stack } from '@chakra-ui/react';
import {
	RiDashboardLine,
	RiContactsLine,
	RiInputMethodLine,
	RiGitMergeLine,
} from 'react-icons/ri';
import NavLink from '../NavLink/NavLink';
import NavSection from '../NavSection/NavSection';

export default function SidebarNav() {
	return (
		<Stack spacing={'12'} align={'center'}>
			<NavSection tittle='GERAL'>
				<NavLink icon={RiDashboardLine}>Dashboard</NavLink>
				<NavLink icon={RiContactsLine}>Usuários</NavLink>
			</NavSection>
			<NavSection tittle='AUTOMAÇÃO'>
				<NavLink icon={RiInputMethodLine}>Formulários</NavLink>
				<NavLink icon={RiGitMergeLine}>Automação</NavLink>
			</NavSection>
		</Stack>
	);
}
