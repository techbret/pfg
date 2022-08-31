import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='text-center mt-4 mb-4'>
    <Link
    to='/landing-one'
    type="button"
    className="inline-flex items-center rounded-md border border-transparent bg-green-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mx-4"
  >
    Landing One
  </Link>
   <Link
   to='/landing-two'
   type="button"
   className="inline-flex items-center rounded-md border border-transparent bg-green-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mx-4"
 >
   Landing Two
 </Link>
  <Link
  to='/landing-three'
  type="button"
  className="inline-flex items-center rounded-md border border-transparent bg-green-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mx-4"
>
  Landing Three
</Link>
</div>
  )
}
