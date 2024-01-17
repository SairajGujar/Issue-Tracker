'use client'
import { Button } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import React from 'react'

const Pagination = ({page, issueLength}:{page:number, issueLength:number}) => {
  const router = useRouter();
  return (
    <nav aria-label="Page navigation example">
  <ul className="flex items-center space-x-2 h-8 text-sm">
    <li>
         <Button onClick={()=>{
          if(page>0){router.push(`/issues?page=${page-1}`)}
         }} color='cyan' className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only">Previous</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
          </Button>
      
    </li>
    <li>
      <Button aria-current="page" className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-white border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{page}</Button>
    </li>
    <li>
      <Button color='cyan' onClick={()=>{
          if(page<=(issueLength/5)){router.push(`/issues?page=${page+1}`)}
         }} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Next</span>
        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </Button>
    </li>
  </ul>
</nav>
  )
}

export default Pagination