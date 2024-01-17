'use client'
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { IoBugSharp } from "react-icons/io5";

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Spinner from './components/Spinner';
import { Avatar, Box, Container, DropdownMenu, Flex, Text } from '@radix-ui/themes';
import Skeleton from 'react-loading-skeleton';
// import Skeleton from '@/app/components';

const Navbar = () => {
    const currentPath = usePathname()
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' }
    ]
    return (
        <nav className='border-b mb-5 px-5 py-3'>
            <Container>
                <Flex justify='between'>
                    <Flex align='center' gap='3'>
                        <Link href='/'><IoBugSharp /></Link>
                        <ul className='flex gap-4 items-center'>
                            {
                                links.map((link) => {
                                    return <Link href={link.href} key={link.href} className={classNames({
                                        'text-zinc-800': link.href === currentPath,
                                        'text-zinc-400 hover:text-zinc-800': true
                                    })}>{link.label}</Link>
                                })
                            }
                        </ul>
                    </Flex>
                    <AuthStatus></AuthStatus>
                </Flex>
            </Container>
        </nav>
    )
}

const AuthStatus = () => {
    const { status, data: session } = useSession()

    return (
        <Box>
            <button>
                {status === 'authenticated' && (
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Avatar src={session.user!.image!} fallback="?" size='2' radius='full' referrerPolicy='no-referrer' />
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Label><Text size='2'>{session.user!.email}</Text></DropdownMenu.Label>
                            <DropdownMenu.Item><Link href='/api/auth/signout'>Logout</Link></DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                )}
                {status === 'unauthenticated' && <Link href='/api/auth/signin'>Login</Link>}
                {status === 'loading' && <Avatar fallback={''} size='2' radius='full'><Skeleton/></Avatar>}
            </button>
        </Box>
    )
}

export default Navbar