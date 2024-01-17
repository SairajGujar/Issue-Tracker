
import { findIssueById } from '@/prisma/issue';
import { Badge, Box, Button } from '@radix-ui/themes';
import Link from 'next/link';
import { FaRegEdit } from "react-icons/fa";
import DeleteIssueButton from '../components/DeleteIssueButton';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/auth/authOptions';


interface Props {
    params: { id: string }
}

const IssueDetails = async ({ params: { id } }: Props) => {
    const session = await getServerSession(authOptions);
    // const session = getServerSession({

    // })
    // const router = useRouter();
    const issue = await findIssueById(id);
    return (
        <div className='flex flex-row space-x-5 items-center justify-center'>
            <div className='flex flex-col space-y-3 w-[80%]'>
                <p className='font-semibold text-2xl'>{issue?.title}</p>
                <div className='flex space-x-2'>
                    <Badge color='red'>{issue?.status}</Badge>
                    <p>{issue?.created_at.toDateString()}</p>
                </div>
                <Box className='p-8 border-[1px] rounded-xl'>{issue?.description}</Box>
            </div>
            {session && <div className='flex flex-col space-y-3'>
                <Button color='violet'><FaRegEdit /><Link href={`/issues/${issue?.id}/edit`}>Edit issue</Link></Button>
                <DeleteIssueButton id={issue!.id}></DeleteIssueButton>
            </div>}
        </div>
    )
}

export default IssueDetails