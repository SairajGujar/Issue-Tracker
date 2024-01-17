'use client'
import authOptions from '@/app/auth/authOptions';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import { createIssueSchema } from '@/app/validationSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Issue } from '@prisma/client';
import { Button, Callout, TextArea, TextFieldInput } from '@radix-ui/themes';
import axios from 'axios';
import { getServerSession } from 'next-auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';




type IssueFormData = z.infer<typeof createIssueSchema>

const IssueForm = ({issue}:{issue?:Issue}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IssueFormData>({
    resolver: zodResolver(createIssueSchema)
  });
  const router = useRouter()
  const [err, setErr] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  return (
    <div className='space-y-6 max-w-xl'>
      {err &&
        <Callout.Root color='red'>
          <Callout.Text>
            {err}
          </Callout.Text>
        </Callout.Root>
      }
      <form className=' space-y-4' onSubmit={handleSubmit(async (data) => {
        try {
          setIsSubmitted(true)
          if(issue){
            await axios.patch('/api/issues/'+issue.id, data)
          }
          else{
            await axios.post('/api/issues', data);
          }
          router.push('/issues')
            router.refresh()
          
        } catch (error) {
          setErr('An unexpected error occurred')
        }
      })}>
        <TextFieldInput placeholder="Title" defaultValue={issue?.title} {...register("title")} />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <TextArea placeholder='Description' size='3' defaultValue={issue?.description} {...register("description")} />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button type='submit' disabled={isSubmitted}>{issue && <p>Update Issue</p>}{!issue && <p>Submit Issue</p>}{isSubmitted&&<Spinner/>}</Button>
      </form>
    </div>
  )
}

export default IssueForm