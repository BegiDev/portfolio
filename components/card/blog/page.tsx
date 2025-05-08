import { Badge } from '@/components/ui/badge'
import React from 'react'

async function Page() {
  return (
    <div className='ml:0 md:ml-10'>
      <div className='flex justify-between items-center'>
      <h1 className='font-bold text-2xl hover:underline'>Soon...</h1>
      <Badge>08.05.2025</Badge> 
      </div>
      <p className="mt-2">Sooon...</p>
    </div>
  )
}

export default Page
