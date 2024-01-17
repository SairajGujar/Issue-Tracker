import { getAllIssuesMod } from "@/prisma/issue"
import Chart from "./Chart"

export default async function Home() {
  const issues = await getAllIssuesMod()

  return (
    <div>
      <Chart open={issues.length} inProgress={0} closed={0}></Chart>
      
    </div>
  )
}
