import BlogCard from '@/components/card/blog/page'
import React from 'react'

function BlogPage() {
  return (
    <div>
      <h1 className='text-center text-4xl border-b pt-4 pb-5'>Blog</h1>
      <div className='flex flex-col md:flex-row  md:gap-5 mt-7'>
        <div className="md:w-[40%] mb-5 md:mb-0 md:border-0 border-b md:pb-0 pb-4">
          <strong>Obuna bo`ling</strong>
          <p className="py-2 text-gray-500">
            Yangi maqola, maruza va darslarimni{' '}
            <a
              href="https://t.me/JavaScriptQuiiz"
              target='_blank'
              rel="noopener noreferrer"
              className='font-bold underline text-gray-600'
            >
              @JavaScriptQuiiz
            </a>{' '}
            telegram kanalimda topishingiz mumkin.
          </p>
        </div>
        <div className="md:w-[70%]">
          <BlogCard />
        </div>
      </div>
    </div>
  )
}

export default BlogPage
