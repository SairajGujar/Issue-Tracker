import ErrorMessage from '@/app/components/ErrorMessage'
import { TextFieldInput, TextArea, Button } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const LoadingNewIssuePage = () => {
  return (
    <div className='space-y-6 max-w-xl'>
      
      <Skeleton/>
      <Skeleton height={10}/>
        <Button>Submit Issue</Button>
    </div>
  )
}

export default LoadingNewIssuePage