import { findIssueById } from '@/prisma/issue';
import IssueForm from '../../components/IssueForm';

interface Props{
    params:{id:string}
}

const EditIssue = async({params:{id}}:Props) => {
    const currentIssue = await findIssueById(id);

  return (
    <IssueForm issue={currentIssue!}/>
  )
}

export default EditIssue