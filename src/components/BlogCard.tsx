import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = () => {
  return (
    <div>
      <Link href={"/"}>
        <div>
          <Image layout='fill' objectFit='cover' src={""} alt='' className='rounded-t-lg'/>

        </div>
      </Link>
    </div>
  )
}

export default BlogCard