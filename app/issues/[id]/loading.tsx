import authOptions from '@/app/auth/authOptions'
import { Badge, Box, Button, Skeleton } from '@radix-ui/themes'
import { getServerSession } from 'next-auth'
import React from 'react'
import { FaRegEdit } from 'react-icons/fa'

const LoadingIssueDetails = async() => {
  const session = await getServerSession(authOptions);
  return (
    <div className='flex flex-row space-x-5 items-center justify-center'>
        <div className='flex flex-col space-y-3 w-[80%]'>
            <p className='font-semibold text-2xl'><Skeleton/></p>
            <div className='flex space-x-2'>
                <Badge color='red'><Skeleton/></Badge>
                <p><Skeleton/></p>
            </div>
            <Box className='p-8 border-[1px] rounded-xl'><Skeleton/></Box>
        </div>
        {session && <div className='flex flex-col space-y-3'>
            <Button color='violet'><FaRegEdit/>Edit issue</Button>
            <Button color='red'>Delete Issue</Button>
        </div>}
    </div>
  )
}

export default LoadingIssueDetails