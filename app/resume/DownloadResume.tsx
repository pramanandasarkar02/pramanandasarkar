import Link from 'next/link'
import React from 'react'
import { BsDownload } from 'react-icons/bs'

type Props = {}

const DownloadResume = (props: Props) => {
  return (
    <Link 
      href="/resume.pdf"  
      target='_blank' 
      download 
      className='flex justify-center'
    >
      <div className='flex gap-2 items-center bg-blue-600 py-2 px-4 rounded text-md font-medium hover:bg-blue-800 text-white cursor-pointer'>
        <span>Download Resume</span>
        <BsDownload className='text-xl font-bold hover:translate-y-1'/>
      </div>
    </Link>
  )
}

export default DownloadResume