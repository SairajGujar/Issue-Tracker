import { Issue } from '@prisma/client'
import { Table, Badge } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssueTable = async({issues}:{issues:Issue[]}) => {
    return (
        <div className=' rounded-lg'>
            <Table.Root variant='surface'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        issues.map(issue => (
                            <Table.Row key={issue.id}>
                                <Table.Cell><Link href={`/issues/${issue.id}`}>{issue.title}</Link></Table.Cell>
                                <Table.Cell><Badge color='red'>{issue.status}</Badge></Table.Cell>
                                <Table.Cell>{issue.created_at.toDateString()}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table.Root>
        </div>
    )
}


export default IssueTable