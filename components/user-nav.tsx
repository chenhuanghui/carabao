'use client';
import { auth, useUser } from '@cabin-id/nextjs';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// import { CreateOrUpdateUser, getUserById } from '@/lib/actions/user.actions';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { getInitialName } from '@/lib/utils';
export default function UserNav() {
	const { user, isSignedIn, signOut } = useUser();

	const [userId, setUserId] = useState<string>('');
	const [userImage, setUserImage] = useState<string>('');
	useEffect(() => {
		if (user) {
			setUserId(user.id);
			updateUserImage();
		}
	}, [user]);

	const updateUserImage = async () => {
		try {
			// const res = await getUserById(user?.id ?? '');
			// if (res) {
			// 	setUserImage(res.image as string);
			// } else {
			// 	const createRes = await CreateOrUpdateUser({
			// 		data: {
			// 			name: user?.firstName + " " + user?.lastName,
			// 			email: user?.email,
			// 			image: user?.avatar,
			// 			phoneNumber: user?.phoneNumber,
			// 			id: user?.id
			// 		}
			// 	})
			// }
		} catch (error) {
			console.error("updateUserImage: ", error);
		}
	};

	useEffect(() => {
		updateUserImage();
	}, [userId]);

	if (user && isSignedIn) {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="relative h-8 w-8 rounded-full bg-green-500 hover:bg-green-600 p-4">
						<Avatar className="h-8 w-8">
							{userImage 
							? (<AvatarImage src={userImage ?? ''} alt={user?.firstName ?? ''} />)
							: <Image src="/assets/icons/carabao-logo.svg" alt="Carabao Logo" width={50} height={50} />
						}							
							<AvatarFallback className='text-black'>
								{getInitialName(user.firstName + ' ' + user.lastName)}
							</AvatarFallback>
						</Avatar>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56 hover:cursor-pointer" align="end" forceMount>
					{user && (
						<DropdownMenuLabel className="font-normal hover:cursor-pointer">
							<div className="flex flex-col space-y-1">
								<p className="text-sm font-medium leading-none">
									{user.firstName + ' ' + user.lastName}
								</p>
								<p className="text-xs leading-none text-muted-foreground">
									{user?.email}
								</p>
							</div>
						</DropdownMenuLabel>
					)}
					<DropdownMenuSeparator />

					<DropdownMenuGroup>
						<Link href="/profile">
							<DropdownMenuItem className='hover:cursor-pointer'>
								Profile
								<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
							</DropdownMenuItem>
						</Link>
						{/* <DropdownMenuItem>
								Billing
								<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
							Settings
							<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>New Team</DropdownMenuItem> */}
					</DropdownMenuGroup>

					<DropdownMenuSeparator />

					<DropdownMenuItem
						className='hover:cursor-pointer'
						onClick={() => signOut()}
					>
						Log out
						<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	}
}
