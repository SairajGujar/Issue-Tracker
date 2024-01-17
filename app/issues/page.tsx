import { getAllIssues } from '@/prisma/issue'
import Dropdown from './Dropdown'
import IssueAction from './IssueAction'
import IssueTable from './IssueTable'
import Pagination from './Pagination'

interface Props{
  searchParams:{page:number}
}


const IssuePage = async ({searchParams:{page}}:Props) => {
  const issues = await getAllIssues(page|0)

  return (
    <div className='p-14 space-y-10'>
      <div className='flex justify-between'>
        <Dropdown></Dropdown>
        <IssueAction></IssueAction>
      </div>
      <IssueTable issues={issues}></IssueTable>
      <Pagination page={page|0} issueLength={issues.length}></Pagination>
    </div>
  )
}

export default IssuePage
