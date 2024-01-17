'use client'
import Spinner from '@/app/components/Spinner';
import { AlertDialog, Button, Flex } from '@radix-ui/themes';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const DeleteIssueButton = async ({ id }: { id: string }) => {
    const router = useRouter();
    const [error, setError] = useState(false)
    const [deleting, setDeleting] = useState(false)

    return (
        <>
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button color="red" disabled={deleting}>Delete Issue {deleting && <Spinner/>}</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content style={{ maxWidth: 450 }}>
                <AlertDialog.Title>Delete Issue</AlertDialog.Title>
                <AlertDialog.Description size="2">
                    Are you sure? This Action can't be undone
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                        <Button variant="solid" color="red" onClick={async () => {
                            try {
                                setDeleting(true);
                                await axios.delete('/api/issues/' + id);
                                router.push('/issues');
                                router.refresh();
                            } catch (error) {
                                setError(true);
                            }
                        }}>
                            Delete Issue
                        </Button>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
        <AlertDialog.Root open={error}>
        <AlertDialog.Content>
            <AlertDialog.Title>Error</AlertDialog.Title>
            <AlertDialog.Description>Issue could not be deleted</AlertDialog.Description>
            <AlertDialog.Cancel><Button mt='5' color='violet' onClick={()=>{setError(false)}}>Ok</Button></AlertDialog.Cancel>
        </AlertDialog.Content>
        
        </AlertDialog.Root>
        </>
    )
}

export default DeleteIssueButton