import { Table } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Dropdown from './Dropdown'
import IssueAction from './IssueAction'

const LoadingIssuePage = () => {
  const issue = [1,2,3,4,5,6]
  return (
    <div className='p-14 space-y-10'>
      <div className='flex justify-between'>
        <Dropdown></Dropdown>
        <IssueAction></IssueAction>
      </div>
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
              issue.map(issue=>(
                <Table.Row key={issue}>
                  <Table.Cell><Skeleton></Skeleton></Table.Cell>
                  <Table.Cell><Skeleton/></Table.Cell>
                  <Table.Cell><Skeleton/></Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
        </Table.Root>
    </div>
  )
}

export default LoadingIssuePage