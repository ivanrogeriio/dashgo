import {
	Flex,
	Icon,
	Input,
	HStack,
	Text,
	Box,
	Avatar,
	useBreakpointValue,
	IconButton,
} from '@chakra-ui/react';
import {
	RiMenuLine,
	RiNotificationLine,
	RiSearchLine,
	RiUserLine,
} from 'react-icons/ri';
import { useSidebarDrawer } from '../../context/SidebarDrawerContext';
import Logo from './Logo/Logo';
import Notifications from './Notifications/Notifications';
import Profile from './Profile/Profile';
import Search from './Search/Search';

export default function Header() {
	const { onOpen } = useSidebarDrawer();

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

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
			{!isWideVersion && (
				<IconButton
					aria-label={'Open navigation'}
					icon={<Icon as={RiMenuLine} />}
					fontSize={'24'}
					variant={'unstyled'}
					onClick={onOpen}
					mr={'2'}
				/>
			)}

			{/* LOGO */}
			<Logo />

			{/* SEARCH BOX */}
			{isWideVersion && <Search />}

			<Flex align={'center'} mx={'auto'}>
				{/* NOTIFICATIONS */}
				<Notifications />

				{/* PROFILE */}
				<Profile showProfileData={isWideVersion} />
			</Flex>
		</Flex>
	);
}
